import { useCallback, useEffect, useMemo, useState } from 'react';
import { INITIAL_CART_ITEMS, PRODUCTS } from './data/catalog';
import { CartItem, OrderReceipt, PageRoute, Product } from './types/store';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';

const DEFAULT_RECEIPT: OrderReceipt = {
  orderNumber: '#SN-2026-8492',
  dateLabel: 'November 24, 2026',
  estimatedDelivery: 'November 27 – November 28, 2026',
  shipping: {
    email: 'claire.dubois@atelier.com',
    firstName: 'Claire',
    lastName: 'Dubois',
    street: '418 Broome Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10013',
  },
  items: INITIAL_CART_ITEMS,
  subtotal: 1175,
  shippingFee: 0,
  total: 1175,
};

function parseHashRoute(): { route: PageRoute; productId: string } {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash || hash === 'home') return { route: 'home', productId: PRODUCTS[0].id };
  if (hash === 'men') return { route: 'men', productId: PRODUCTS[0].id };
  if (hash === 'women') return { route: 'women', productId: PRODUCTS[0].id };
  if (hash === 'search') return { route: 'search', productId: PRODUCTS[0].id };
  if (hash === 'cart') return { route: 'cart', productId: PRODUCTS[0].id };
  if (hash === 'checkout') return { route: 'checkout', productId: PRODUCTS[0].id };
  if (hash === 'confirmation') return { route: 'confirmation', productId: PRODUCTS[0].id };
  if (hash.startsWith('product/')) {
    const id = hash.slice('product/'.length);
    const exists = PRODUCTS.some((p) => p.id === id);
    return { route: 'product', productId: exists ? id : PRODUCTS[0].id };
  }
  return { route: 'home', productId: PRODUCTS[0].id };
}

export default function App() {
  const initial = parseHashRoute();
  const [route, setRoute] = useState<PageRoute>(initial.route);
  const [selectedProductId, setSelectedProductId] = useState<string>(initial.productId);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = window.localStorage.getItem('stylenest_cart_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return INITIAL_CART_ITEMS;
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = window.localStorage.getItem('stylenest_wishlist_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return [];
  });

  const [lastReceipt, setLastReceipt] = useState<OrderReceipt>(() => {
    try {
      const saved = window.localStorage.getItem('stylenest_receipt_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.orderNumber) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_RECEIPT;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('stylenest_cart_v1', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      window.localStorage.setItem('stylenest_wishlist_v1', JSON.stringify(wishlistIds));
    } catch {
      // ignore
    }
  }, [wishlistIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem('stylenest_receipt_v1', JSON.stringify(lastReceipt));
    } catch {
      // ignore
    }
  }, [lastReceipt]);

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHashRoute();
      setRoute(next.route);
      setSelectedProductId(next.productId);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((nextRoute: PageRoute, sectionId?: string) => {
    setRoute(nextRoute);
    const nextHash = nextRoute === 'home' ? '#home' : `#${nextRoute}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }

    if (nextRoute === 'home' && sectionId) {
      window.setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const openProduct = useCallback((productId: string) => {
    setSelectedProductId(productId);
    setRoute('product');
    const nextHash = `#product/${productId}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }, []);

  const addToBag = useCallback(
    (
      product: Product,
      options?: { color?: string; size?: string; quantity?: number },
    ) => {
      const color = options?.color || product.colors[0]?.name || product.subtitle;
      const size = options?.size || product.defaultSize;
      const quantity = options?.quantity ?? 1;

      setCart((prev) => {
        const idx = prev.findIndex(
          (item) =>
            item.productId === product.id &&
            item.color === color &&
            item.size === size,
        );
        if (idx >= 0) {
          return prev.map((item, i) =>
            i === idx ? { ...item, quantity: item.quantity + quantity } : item,
          );
        }
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            color,
            size,
            price: product.price,
            quantity,
            image: product.image,
          },
        ];
      });
    },
    [],
  );

  const updateCartQuantity = useCallback(
    (productId: string, color: string, size: string, delta: number) => {
      setCart((prev) =>
        prev.map((item) => {
          if (
            item.productId === productId &&
            item.color === color &&
            item.size === size
          ) {
            return { ...item, quantity: Math.max(1, item.quantity + delta) };
          }
          return item;
        }),
      );
    },
    [],
  );

  const removeCartItem = useCallback(
    (productId: string, color: string, size: string) => {
      setCart((prev) =>
        prev.filter(
          (item) =>
            !(
              item.productId === productId &&
              item.color === color &&
              item.size === size
            ),
        ),
      );
    },
    [],
  );

  const handleCompleteOrder = useCallback(
    (receipt: OrderReceipt) => {
      setLastReceipt(receipt);
      setCart([]);
      navigate('confirmation');
    },
    [navigate],
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const wishlistProducts = useMemo(
    () => PRODUCTS.filter((p) => wishlistIds.includes(p.id)),
    [wishlistIds],
  );

  const activeProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0],
    [selectedProductId],
  );

  const showFooter = route !== 'checkout' && route !== 'confirmation';

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
      <Navbar
        currentRoute={route}
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onNavigate={navigate}
        onOpenWishlist={() => setWishlistOpen(true)}
      />

      <main className="flex-1 flex flex-col">
        {route === 'home' && (
          <HomePage
            wishlistIds={wishlistIds}
            onNavigate={navigate}
            onOpenProduct={openProduct}
            onToggleWishlist={toggleWishlist}
            onAddToBag={(product) => addToBag(product)}
          />
        )}

        {route === 'men' && (
          <CollectionPage
            key="men"
            department="men"
            wishlistIds={wishlistIds}
            onOpenProduct={openProduct}
            onToggleWishlist={toggleWishlist}
            onAddToBag={(product) => addToBag(product)}
          />
        )}

        {route === 'women' && (
          <CollectionPage
            key="women"
            department="women"
            wishlistIds={wishlistIds}
            onOpenProduct={openProduct}
            onToggleWishlist={toggleWishlist}
            onAddToBag={(product) => addToBag(product)}
          />
        )}

        {route === 'product' && (
          <ProductDetailsPage
            product={activeProduct}
            isWishlisted={wishlistIds.includes(activeProduct.id)}
            onNavigate={navigate}
            onToggleWishlist={toggleWishlist}
            onAddToBag={addToBag}
            onOpenSizeGuide={() => setSizeGuideOpen(true)}
          />
        )}

        {route === 'search' && (
          <SearchResultsPage
            wishlistIds={wishlistIds}
            onOpenProduct={openProduct}
            onToggleWishlist={toggleWishlist}
            onAddToBag={(product) => addToBag(product)}
          />
        )}

        {route === 'cart' && (
          <ShoppingCartPage
            items={cart}
            onNavigate={navigate}
            onOpenProduct={openProduct}
            onUpdateQuantity={updateCartQuantity}
            onRemoveItem={removeCartItem}
          />
        )}

        {route === 'checkout' && (
          <CheckoutPage
            items={cart}
            onNavigate={navigate}
            onCompleteOrder={handleCompleteOrder}
          />
        )}

        {route === 'confirmation' && (
          <OrderConfirmationPage
            receipt={lastReceipt}
            onNavigate={navigate}
          />
        )}
      </main>

      {showFooter && (
        <Footer
          onNavigate={navigate}
          onOpenSizeGuide={() => setSizeGuideOpen(true)}
          onSelectDefaultProduct={() => openProduct('cashmere-belted-coat')}
        />
      )}

      <WishlistDrawer
        open={wishlistOpen}
        items={wishlistProducts}
        onClose={() => setWishlistOpen(false)}
        onOpenProduct={openProduct}
        onRemoveWishlist={toggleWishlist}
        onAddToBag={(product) => addToBag(product)}
      />

      <SizeGuideModal
        open={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </div>
  );
}

import { formatCurrency } from '../data/catalog';
import { CartItem, PageRoute } from '../types/store';
import { EditorialImage } from '../components/EditorialImage';

interface ShoppingCartPageProps {
  items: CartItem[];
  onNavigate: (route: PageRoute) => void;
  onOpenProduct: (productId: string) => void;
  onUpdateQuantity: (productId: string, color: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, color: string, size: string) => void;
}

export function ShoppingCartPage({
  items,
  onNavigate,
  onOpenProduct,
  onUpdateQuantity,
  onRemoveItem,
}: ShoppingCartPageProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const qualifiesFreeShipping = subtotal >= 250 || subtotal === 0;
  const shippingFee = qualifiesFreeShipping ? 0 : 25;
  const total = subtotal + shippingFee;

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="border-b border-outline-variant pb-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-2">
            Your Selection
          </p>
          <h1 className="font-display text-display-md-mobile md:text-display-md text-on-surface">
            Shopping Bag
          </h1>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('women')}
          className="font-label text-label-md uppercase tracking-wider text-on-surface underline underline-offset-4 hover:text-secondary self-start sm:self-auto"
        >
          Continue Shopping
        </button>
      </div>

      {items.length === 0 ? (
        <div className="bg-surface-container-low border border-outline-variant/60 py-16 px-6 text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-headline-md text-on-surface mb-3">
            Your Shopping Bag is Empty
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-8">
            Explore our Autumn / Winter Atelier collections in tailored wool, cashmere, and mulberry silk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('women')}
              className="bg-primary text-on-primary px-7 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors"
            >
              Shop Women
            </button>
            <button
              type="button"
              onClick={() => onNavigate('men')}
              className="border border-primary text-on-surface px-7 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-surface-container transition-colors"
            >
              Shop Men
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Bag Items List */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-outline-variant border-b border-outline-variant">
            {items.map((item) => (
              <article
                key={`${item.productId}-${item.color}-${item.size}`}
                className="py-6 flex flex-col sm:flex-row gap-6"
              >
                <button
                  type="button"
                  onClick={() => onOpenProduct(item.productId)}
                  className="w-28 sm:w-32 aspect-[3/4] bg-surface-container-low shrink-0 overflow-hidden"
                >
                  <EditorialImage
                    src={item.image}
                    alt={item.name}
                    fallbackLabel={item.name}
                    className="w-full h-full object-cover"
                  />
                </button>

                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <button
                        type="button"
                        onClick={() => onOpenProduct(item.productId)}
                        className="text-left hover:underline"
                      >
                        <h2 className="font-headline text-headline-sm text-on-surface">
                          {item.name}
                        </h2>
                      </button>
                      <p className="font-body text-body-md text-on-surface-variant mt-1">
                        Color: {item.color} · Size: {item.size}
                      </p>
                    </div>
                    <p className="font-body text-body-lg text-on-surface tabular-nums">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-outline-variant rounded-sm px-2 py-1.5 gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.color, item.size, -1)
                        }
                        aria-label={`Decrease quantity for ${item.name}`}
                        className="text-on-surface hover:text-secondary"
                      >
                        <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                          remove
                        </span>
                      </button>
                      <span className="font-body text-body-md tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.color, item.size, 1)
                        }
                        aria-label={`Increase quantity for ${item.name}`}
                        className="text-on-surface hover:text-secondary"
                      >
                        <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                          add
                        </span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.productId, item.color, item.size)}
                      className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-error underline underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="lg:col-span-4 bg-surface-container-low p-6 sm:p-8 border border-outline-variant/60">
            <h2 className="font-headline text-headline-md text-on-surface mb-6 pb-4 border-b border-outline-variant">
              Order Summary
            </h2>
            <div className="flex flex-col gap-3.5 font-body text-body-md mb-6">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Subtotal</span>
                <span className="text-on-surface tabular-nums">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Express Shipping</span>
                {qualifiesFreeShipping ? (
                  <span className="text-success font-medium">Complimentary</span>
                ) : (
                  <span className="text-on-surface tabular-nums">
                    {formatCurrency(shippingFee)}
                  </span>
                )}
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Estimated Tax</span>
                <span className="text-on-surface tabular-nums">Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-outline-variant pt-4 mb-6 flex justify-between items-baseline">
              <span className="font-title text-title-md text-on-surface">Estimated Total</span>
              <span className="font-headline text-headline-md text-on-surface tabular-nums">
                {formatCurrency(total)}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('checkout')}
              className="w-full inline-flex items-center justify-center bg-primary text-on-primary px-7 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors duration-150 whitespace-nowrap"
            >
              Proceed to Checkout
            </button>
            <p className="font-body text-body-sm text-on-surface-variant text-center mt-4">
              Complimentary gift packaging and 30-day returns included.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { formatCurrency } from '../data/catalog';
import { Product } from '../types/store';
import { EditorialImage } from './EditorialImage';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  showDepartment?: boolean;
  cardSurfaceClass?: string;
  onOpenProduct: (productId: string) => void;
  onToggleWishlist: (productId: string) => void;
  onAddToBag: (product: Product) => void;
}

export function ProductCard({
  product,
  isWishlisted,
  showDepartment = false,
  cardSurfaceClass = 'bg-surface',
  onOpenProduct,
  onToggleWishlist,
  onAddToBag,
}: ProductCardProps) {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToBag(product);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article
      className={`group flex flex-col justify-between h-full ${cardSurfaceClass}`}
    >
      <div>
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container-low mb-3.5">
          <button
            type="button"
            onClick={() => onOpenProduct(product.id)}
            aria-label={`View ${product.name}`}
            className="block w-full h-full text-left"
          >
            <EditorialImage
              src={product.image}
              alt={product.name}
              fallbackLabel={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </button>

          <button
            type="button"
            onClick={() => onToggleWishlist(product.id)}
            aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
            aria-pressed={isWishlisted}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/90 flex items-center justify-center hover:bg-surface-container-lowest transition-colors duration-150 ${
              isWishlisted ? 'text-error' : 'text-on-surface'
            }`}
          >
            <span
              className="material-symbols-outlined text-title-lg"
              style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
              aria-hidden="true"
            >
              favorite
            </span>
          </button>
        </div>

        <header className="flex items-start justify-between gap-3">
          <div>
            <button
              type="button"
              onClick={() => onOpenProduct(product.id)}
              className="text-left hover:underline"
            >
              <h3 className="font-title text-title-md text-on-surface">{product.name}</h3>
            </button>
            <p className="font-body text-body-sm text-on-surface-variant">
              {showDepartment
                ? `${product.department === 'women' ? 'Women' : 'Men'} · ${product.subtitle}`
                : product.subtitle}
            </p>
          </div>
          <span className="font-body text-body-md text-on-surface tabular-nums shrink-0">
            {formatCurrency(product.price)}
          </span>
        </header>
      </div>

      <footer className="mt-4 pt-3 border-t border-outline-variant/60">
        <button
          type="button"
          onClick={handleAdd}
          className="w-full py-2.5 bg-transparent border border-outline-variant text-on-surface font-label text-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary hover:border-primary transition-colors duration-150 whitespace-nowrap"
        >
          <span>{justAdded ? 'Added to Bag' : 'Add to Bag'}</span>
        </button>
      </footer>
    </article>
  );
}

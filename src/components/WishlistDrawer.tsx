import { formatCurrency } from '../data/catalog';
import { Product } from '../types/store';
import { EditorialImage } from './EditorialImage';

interface WishlistDrawerProps {
  open: boolean;
  items: Product[];
  onClose: () => void;
  onOpenProduct: (productId: string) => void;
  onRemoveWishlist: (productId: string) => void;
  onAddToBag: (product: Product) => void;
}

export function WishlistDrawer({
  open,
  items,
  onClose,
  onOpenProduct,
  onRemoveWishlist,
  onAddToBag,
}: WishlistDrawerProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-primary/50"
      role="dialog"
      aria-modal="true"
      aria-label="Saved Wishlist"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-surface h-full flex flex-col border-l border-outline-variant shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-outline-variant flex items-center justify-between">
          <div>
            <p className="font-label text-label-sm uppercase tracking-widest text-secondary">
              Saved Selection
            </p>
            <h2 className="font-headline text-headline-md text-on-surface">
              Wishlist ({items.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close wishlist"
            className="w-10 h-10 inline-flex items-center justify-center text-on-surface hover:text-secondary"
          >
            <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-headline text-headline-sm text-on-surface mb-2">
                Your Wishlist is Empty
              </p>
              <p className="font-body text-body-md text-on-surface-variant mb-6">
                Select the heart icon on any piece to curate your personal edit.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors"
              >
                Continue Exploring
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-outline-variant">
              {items.map((item) => (
                <div key={item.id} className="py-5 flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenProduct(item.id);
                    }}
                    className="w-20 aspect-[3/4] bg-surface-container-low shrink-0 overflow-hidden"
                  >
                    <EditorialImage
                      src={item.image}
                      alt={item.name}
                      fallbackLabel={item.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onOpenProduct(item.id);
                          }}
                          className="text-left hover:underline"
                        >
                          <h3 className="font-title text-title-md text-on-surface">
                            {item.name}
                          </h3>
                        </button>
                        <p className="font-body text-body-sm text-on-surface-variant">
                          {item.subtitle}
                        </p>
                      </div>
                      <span className="font-body text-body-md text-on-surface tabular-nums">
                        {formatCurrency(item.price)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => onAddToBag(item)}
                        className="px-4 py-2 bg-primary text-on-primary rounded-sm font-label text-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors"
                      >
                        Add to Bag
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveWishlist(item.id)}
                        className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-error underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

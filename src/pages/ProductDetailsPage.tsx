import { useEffect, useState } from 'react';
import { formatCurrency } from '../data/catalog';
import { PageRoute, Product } from '../types/store';
import { EditorialImage } from '../components/EditorialImage';

interface ProductDetailsPageProps {
  product: Product;
  isWishlisted: boolean;
  onNavigate: (route: PageRoute) => void;
  onToggleWishlist: (productId: string) => void;
  onAddToBag: (product: Product, options: { color: string; size: string; quantity: number }) => void;
  onOpenSizeGuide: () => void;
}

export function ProductDetailsPage({
  product,
  isWishlisted,
  onNavigate,
  onToggleWishlist,
  onAddToBag,
  onOpenSizeGuide,
}: ProductDetailsPageProps) {
  const [selectedImage, setSelectedImage] = useState(product.gallery[0] || product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || product.subtitle);
  const [selectedSize, setSelectedSize] = useState(product.defaultSize);
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  useEffect(() => {
    setSelectedImage(product.gallery[0] || product.image);
    setSelectedColor(product.colors[0]?.name || product.subtitle);
    setSelectedSize(product.defaultSize);
    setQuantity(1);
    setAddedFeedback(false);
  }, [product]);

  const handleAdd = () => {
    onAddToBag(product, {
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    setAddedFeedback(true);
    window.setTimeout(() => setAddedFeedback(false), 1200);
  };

  return (
    <div className="pb-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-label text-label-sm uppercase tracking-wider text-on-surface-variant"
        >
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-on-surface"
          >
            Home
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            onClick={() => onNavigate(product.department)}
            className="hover:text-on-surface"
          >
            {product.department === 'women' ? "Women's Collection" : "Men's Collection"}
          </button>
          <span aria-hidden="true">/</span>
          <span className="text-on-surface">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 aspect-[3/4] bg-surface-container-low overflow-hidden">
              <EditorialImage
                src={selectedImage}
                alt={`${product.name} editorial view`}
                fallbackLabel={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.gallery.map((imgUrl, index) => {
              const isSelected = selectedImage === imgUrl;
              return (
                <button
                  key={`${product.id}-thumb-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(imgUrl)}
                  aria-label={`View angle ${index + 1}`}
                  className={`aspect-[3/4] bg-surface-container-low overflow-hidden border transition-colors ${
                    isSelected ? 'border-primary' : 'border-transparent hover:border-outline-variant'
                  }`}
                >
                  <EditorialImage
                    src={imgUrl}
                    alt={`${product.name} detail view ${index + 1}`}
                    fallbackLabel={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Product Purchase Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="border-b border-outline-variant pb-6">
              <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-2">
                {product.collectionKicker}
              </p>
              <div className="flex items-start justify-between gap-4">
                <h1 className="font-display text-display-md-mobile md:text-display-md text-on-surface">
                  {product.name}
                </h1>
                <button
                  type="button"
                  onClick={() => onToggleWishlist(product.id)}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                  aria-pressed={isWishlisted}
                  className={`w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary shrink-0 transition-colors ${
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
              <p className="font-title text-title-lg text-on-surface tabular-nums mt-3">
                {formatCurrency(product.price)}
              </p>
            </div>

            <p className="font-body text-body-lg text-on-surface-variant text-pretty">
              {product.description}
            </p>

            {/* Color Selector */}
            <div>
              <p className="font-label text-label-sm uppercase tracking-wider text-on-surface mb-3">
                Color:{' '}
                <span className="text-on-surface-variant font-normal">{selectedColor}</span>
              </p>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => {
                  const active = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      aria-label={color.name}
                      aria-pressed={active}
                      className={`w-8 h-8 rounded-full ${color.swatchClass} transition-all ${
                        active
                          ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface'
                          : 'border border-outline-variant hover:border-primary'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-label text-label-sm uppercase tracking-wider text-on-surface">
                  Select Size
                </p>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="font-body text-body-sm text-on-surface-variant underline underline-offset-4 hover:text-on-surface"
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => {
                  const active = selectedSize === size.label;
                  if (!size.available) {
                    return (
                      <button
                        key={size.label}
                        type="button"
                        disabled
                        className="py-2.5 border border-outline-variant/50 font-label text-label-md text-on-surface-variant line-through cursor-not-allowed"
                      >
                        {size.label}
                      </button>
                    );
                  }
                  return (
                    <button
                      key={size.label}
                      type="button"
                      onClick={() => setSelectedSize(size.label)}
                      aria-pressed={active}
                      className={`py-2.5 border font-label text-label-md transition-colors ${
                        active
                          ? 'border-primary bg-primary text-on-primary'
                          : 'border-outline-variant text-on-surface hover:border-primary'
                      }`}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & Add to Bag */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="inline-flex items-center justify-between border border-outline-variant rounded-sm px-3 py-2.5 sm:w-32">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="text-on-surface hover:text-secondary px-1"
                >
                  <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                    remove
                  </span>
                </button>
                <span className="font-body text-body-md tabular-nums">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="text-on-surface hover:text-secondary px-1"
                >
                  <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                    add
                  </span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2.5 bg-primary text-on-primary px-7 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors duration-150 whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                  shopping_bag
                </span>
                <span>{addedFeedback ? 'Added to Bag' : 'Add to Bag'}</span>
              </button>
            </div>

            {/* Garment Details */}
            <div className="border-t border-outline-variant pt-6 flex flex-col gap-4">
              <div>
                <h2 className="font-label text-label-sm uppercase tracking-wider text-on-surface mb-1.5">
                  Composition &amp; Care
                </h2>
                <p className="font-body text-body-md text-on-surface-variant">
                  {product.composition} {product.origin}
                </p>
              </div>
              <div>
                <h2 className="font-label text-label-sm uppercase tracking-wider text-on-surface mb-1.5">
                  Complimentary Delivery &amp; Returns
                </h2>
                <p className="font-body text-body-md text-on-surface-variant">
                  Express courier delivery within 2–3 business days. 30-day complimentary returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

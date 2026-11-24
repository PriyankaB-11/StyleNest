import { useMemo, useState } from 'react';
import { PRODUCTS } from '../data/catalog';
import { Department, Product } from '../types/store';
import { ProductCard } from '../components/ProductCard';

interface CollectionPageProps {
  department: Department;
  wishlistIds: string[];
  onOpenProduct: (productId: string) => void;
  onToggleWishlist: (productId: string) => void;
  onAddToBag: (product: Product) => void;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';

const DEPARTMENT_CONFIG: Record<
  Department,
  {
    kicker: string;
    title: string;
    description: string;
    filters: { key: string; label: string }[];
  }
> = {
  men: {
    kicker: 'Menswear / Autumn — Winter',
    title: "Men's Collection",
    description:
      'Precision tailoring, architectural outerwear, and fine-gauge merino knitwear designed for effortless versatility.',
    filters: [
      { key: 'all', label: 'All Pieces' },
      { key: 'outerwear', label: 'Outerwear' },
      { key: 'tailoring', label: 'Tailoring' },
      { key: 'knitwear', label: 'Knitwear' },
    ],
  },
  women: {
    kicker: 'Womenswear / Autumn — Winter',
    title: "Women's Collection",
    description:
      'Fluid mulberry silk, double-faced cashmere coats, and sculptural knitwear in warm ivory and muted beige tones.',
    filters: [
      { key: 'all', label: 'All Pieces' },
      { key: 'outerwear', label: 'Outerwear' },
      { key: 'dresses', label: 'Dresses & Silk' },
      { key: 'knitwear', label: 'Knitwear' },
      { key: 'accessories', label: 'Leather Goods' },
    ],
  },
};

export function CollectionPage({
  department,
  wishlistIds,
  onOpenProduct,
  onToggleWishlist,
  onAddToBag,
}: CollectionPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const config = DEPARTMENT_CONFIG[department];

  const items = useMemo(() => {
    const deptItems = PRODUCTS.filter((p) => {
      if (p.department !== department) return false;
      if (selectedCategory === 'all') return true;
      if (department === 'men' && selectedCategory === 'outerwear') {
        return p.category === 'outerwear' || p.category === 'accessories';
      }
      return p.category === selectedCategory;
    });

    const sorted = [...deptItems];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      sorted.sort((a, b) => Number(Boolean(b.isNewArrival)) - Number(Boolean(a.isNewArrival)));
    }
    return sorted;
  }, [department, selectedCategory, sortBy]);

  return (
    <div>
      {/* Collection Header */}
      <section className="border-b border-outline-variant bg-surface-container-low py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-2">
              {config.kicker}
            </p>
            <h1 className="font-display text-display-md-mobile md:text-display-md text-on-surface mb-3">
              {config.title}
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant text-pretty">
              {config.description}
            </p>
          </div>
          <p className="font-label text-label-md text-on-surface-variant tabular-nums">
            Showing {items.length} {items.length === 1 ? 'Piece' : 'Pieces'}
          </p>
        </div>
      </section>

      {/* Category Filters & Sort Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/60 pb-6">
          <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Category filters">
            {config.filters.map((filter) => {
              const active = selectedCategory === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setSelectedCategory(filter.key)}
                  aria-pressed={active}
                  className={`px-5 py-2 rounded-full font-label text-label-sm uppercase tracking-wider transition-colors duration-150 whitespace-nowrap ${
                    active
                      ? 'bg-primary text-on-primary'
                      : 'bg-transparent text-on-surface border border-outline-variant hover:border-primary'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="sort-select"
              className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant"
            >
              Sort:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-surface-container-lowest border border-outline-variant rounded-sm py-2 pl-3 pr-8 font-body text-body-md text-on-surface focus:border-primary focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {items.length === 0 ? (
          <div className="py-16 text-center bg-surface-container-low border border-outline-variant/60">
            <p className="font-headline text-headline-sm text-on-surface mb-2">
              No Pieces Match This Selection
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="mt-4 bg-primary text-on-primary px-6 py-2.5 rounded-sm font-label text-label-sm uppercase tracking-widest"
            >
              View All Pieces
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {items.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onOpenProduct={onOpenProduct}
                onToggleWishlist={onToggleWishlist}
                onAddToBag={onAddToBag}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

import { FormEvent, useMemo, useState } from 'react';
import { PRODUCTS } from '../data/catalog';
import { Product } from '../types/store';
import { ProductCard } from '../components/ProductCard';

interface SearchResultsPageProps {
  wishlistIds: string[];
  onOpenProduct: (productId: string) => void;
  onToggleWishlist: (productId: string) => void;
  onAddToBag: (product: Product) => void;
}

export function SearchResultsPage({
  wishlistIds,
  onOpenProduct,
  onToggleWishlist,
  onAddToBag,
}: SearchResultsPageProps) {
  const [inputValue, setInputValue] = useState('Cashmere');
  const [activeQuery, setActiveQuery] = useState('Cashmere');
  const [deptFilter, setDeptFilter] = useState<'all' | 'women' | 'men'>('all');

  const matches = useMemo(() => {
    const q = activeQuery.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (deptFilter !== 'all' && p.department !== deptFilter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q) ||
        p.collectionKicker.toLowerCase().includes(q)
      );
    });
  }, [activeQuery, deptFilter]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setActiveQuery(inputValue.trim());
  };

  return (
    <div>
      {/* Search Input Header */}
      <section className="border-b border-outline-variant bg-surface-container-low py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-3 text-center">
            Archive &amp; Collection Search
          </p>

          <form
            onSubmit={handleSubmit}
            role="search"
            className="flex items-center w-full border-b border-primary bg-transparent py-3 gap-3 mb-4"
          >
            <input
              type="search"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setActiveQuery(e.target.value);
              }}
              aria-label="Search StyleNest"
              placeholder="Search coats, tailoring, silk, knitwear..."
              className="flex-1 bg-transparent border-none p-0 font-headline text-headline-md md:text-headline-lg text-on-surface placeholder:text-outline focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="text-on-surface hover:text-secondary transition-colors duration-150"
            >
              <span className="material-symbols-outlined text-headline-sm" aria-hidden="true">
                search
              </span>
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-body text-body-md text-on-surface-variant">
              Showing{' '}
              <span className="text-on-surface font-medium tabular-nums">
                {matches.length}
              </span>{' '}
              {matches.length === 1 ? 'result' : 'results'}
              {activeQuery.trim() ? (
                <>
                  {' '}
                  for &ldquo;<span className="text-on-surface">{activeQuery.trim()}</span>&rdquo;
                </>
              ) : (
                ' across all collections'
              )}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {(['all', 'women', 'men'] as const).map((dept) => {
                const active = deptFilter === dept;
                const label = dept === 'all' ? 'All' : dept === 'women' ? 'Women' : 'Men';
                return (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setDeptFilter(dept)}
                    aria-pressed={active}
                    className={`px-4 py-1.5 rounded-full font-label text-label-sm uppercase tracking-wider transition-colors ${
                      active
                        ? 'bg-primary text-on-primary'
                        : 'border border-outline-variant text-on-surface hover:border-primary'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {matches.length === 0 ? (
          <div className="py-16 text-center bg-surface-container-low border border-outline-variant/60 max-w-xl mx-auto px-6">
            <h2 className="font-headline text-headline-md text-on-surface mb-2">
              No Pieces Found
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mb-6">
              Try searching for &ldquo;Cashmere&rdquo;, &ldquo;Wool&rdquo;, &ldquo;Silk&rdquo;, or &ldquo;Blazer&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setInputValue('');
                setActiveQuery('');
                setDeptFilter('all');
              }}
              className="bg-primary text-on-primary px-6 py-3 rounded-sm font-label text-label-sm uppercase tracking-widest hover:bg-primary-container transition-colors"
            >
              Show All Pieces
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
            {matches.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                showDepartment
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

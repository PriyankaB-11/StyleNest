import { useState } from 'react';
import { PageRoute } from '../types/store';

interface NavbarProps {
  currentRoute: PageRoute;
  cartCount: number;
  wishlistCount: number;
  onNavigate: (route: PageRoute, sectionId?: string) => void;
  onOpenWishlist: () => void;
}

export function Navbar({
  currentRoute,
  cartCount,
  wishlistCount,
  onNavigate,
  onOpenWishlist,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (currentRoute === 'checkout') {
    return (
      <header className="sticky top-0 z-40 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate('cart')}
            className="inline-flex items-center gap-2 font-label text-label-md uppercase tracking-wider text-on-surface hover:text-secondary transition-colors whitespace-nowrap shrink-0"
          >
            <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
              arrow_back
            </span>
            <span className="hidden sm:inline">Back to Bag</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="font-headline text-headline-md md:text-headline-lg tracking-tight text-on-surface whitespace-nowrap shrink-0"
          >
            StyleNest
          </button>

          <div className="inline-flex items-center gap-1.5 text-on-surface-variant font-label text-label-sm uppercase tracking-wider whitespace-nowrap shrink-0">
            <span className="material-symbols-outlined text-title-md" aria-hidden="true">
              lock
            </span>
            <span className="hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </header>
    );
  }

  if (currentRoute === 'confirmation') {
    return (
      <header className="bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-center">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="font-headline text-headline-md md:text-headline-lg tracking-tight text-on-surface whitespace-nowrap shrink-0"
          >
            StyleNest
          </button>
        </div>
      </header>
    );
  }

  const navLinkClass = (active: boolean) =>
    `font-label text-label-md uppercase tracking-wider transition-colors duration-150 whitespace-nowrap shrink-0 ${
      active
        ? 'text-on-surface underline underline-offset-4'
        : 'text-on-surface hover:text-secondary'
    }`;

  return (
    <>
      <div className="bg-primary text-on-primary py-2.5 px-4 text-center">
        <p className="font-label text-label-sm uppercase tracking-widest">
          Complimentary Express Shipping on Orders Over $250 — Autumn / Winter Atelier Now Live
        </p>
      </div>

      <header className="sticky top-0 z-40 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-on-surface"
          >
            <span className="material-symbols-outlined text-headline-sm" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
            <button
              type="button"
              onClick={() => onNavigate('men')}
              className={navLinkClass(currentRoute === 'men')}
            >
              Men
            </button>
            <button
              type="button"
              onClick={() => onNavigate('women')}
              className={navLinkClass(currentRoute === 'women')}
            >
              Women
            </button>
            <button
              type="button"
              onClick={() => onNavigate('home', 'new-arrivals')}
              className={navLinkClass(false)}
            >
              New Arrivals
            </button>
            <button
              type="button"
              onClick={() => onNavigate('home', 'collections')}
              className={navLinkClass(false)}
            >
              Collections
            </button>
          </nav>

          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="font-headline text-headline-md md:text-headline-lg tracking-tight text-on-surface whitespace-nowrap shrink-0"
          >
            StyleNest
          </button>

          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('search')}
              aria-label="Search collections"
              className={`inline-flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 ${
                currentRoute === 'search'
                  ? 'text-on-surface underline underline-offset-4'
                  : 'text-on-surface hover:text-secondary'
              }`}
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                search
              </span>
              <span className="hidden lg:inline font-label text-label-md uppercase tracking-wider">
                Search
              </span>
            </button>

            <button
              type="button"
              onClick={onOpenWishlist}
              aria-label={`Saved wishlist (${wishlistCount} items)`}
              className="hidden sm:inline-flex items-center gap-1 text-on-surface hover:text-secondary transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <span
                className="material-symbols-outlined text-title-lg"
                style={{ fontVariationSettings: wishlistCount > 0 ? "'FILL' 1" : "'FILL' 0" }}
                aria-hidden="true"
              >
                favorite
              </span>
              {wishlistCount > 0 && (
                <span className="font-label text-label-sm tabular-nums text-secondary">
                  ({wishlistCount})
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => onNavigate('cart')}
              aria-label="Shopping Bag"
              className={`inline-flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 ${
                currentRoute === 'cart'
                  ? 'text-on-surface underline underline-offset-4'
                  : 'text-on-surface hover:text-secondary'
              }`}
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                shopping_bag
              </span>
              <span className="font-label text-label-md uppercase tracking-wider tabular-nums">
                Bag ({cartCount})
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-outline-variant bg-surface px-4 py-4">
            <nav className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('men');
                }}
                className="text-left font-label text-label-lg uppercase tracking-wider py-1.5 text-on-surface"
              >
                Men
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('women');
                }}
                className="text-left font-label text-label-lg uppercase tracking-wider py-1.5 text-on-surface"
              >
                Women
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('home', 'new-arrivals');
                }}
                className="text-left font-label text-label-lg uppercase tracking-wider py-1.5 text-on-surface"
              >
                New Arrivals
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('home', 'collections');
                }}
                className="text-left font-label text-label-lg uppercase tracking-wider py-1.5 text-on-surface"
              >
                Collections
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWishlist();
                }}
                className="text-left font-label text-label-lg uppercase tracking-wider py-1.5 text-on-surface"
              >
                Saved Wishlist ({wishlistCount})
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

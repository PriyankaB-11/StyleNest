import { PageRoute } from '../types/store';

interface FooterProps {
  onNavigate: (route: PageRoute, sectionId?: string) => void;
  onOpenSizeGuide: () => void;
  onSelectDefaultProduct: () => void;
}

export function Footer({
  onNavigate,
  onOpenSizeGuide,
  onSelectDefaultProduct,
}: FooterProps) {
  return (
    <footer className="bg-primary text-on-primary pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-on-primary/15">
          <div>
            <h3 className="font-headline text-headline-md mb-3">StyleNest</h3>
            <p className="font-body text-body-md text-on-primary-container/80 max-w-xs">
              Discover Your Style. Define Your Story. Contemporary luxury fashion crafted with enduring materials.
            </p>
          </div>

          <div>
            <h4 className="font-label text-label-sm uppercase tracking-widest text-on-primary-container/70 mb-4">
              Collections
            </h4>
            <ul className="flex flex-col gap-2.5 font-body text-body-md text-on-primary-container/90">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('men')}
                  className="hover:text-on-primary transition-colors text-left"
                >
                  Men&apos;s Ready-to-Wear
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('women')}
                  className="hover:text-on-primary transition-colors text-left"
                >
                  Women&apos;s Ready-to-Wear
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home', 'new-arrivals')}
                  className="hover:text-on-primary transition-colors text-left"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('search')}
                  className="hover:text-on-primary transition-colors text-left"
                >
                  Search Archive
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-label-sm uppercase tracking-widest text-on-primary-container/70 mb-4">
              Client Services
            </h4>
            <ul className="flex flex-col gap-2.5 font-body text-body-md text-on-primary-container/90">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('cart')}
                  className="hover:text-on-primary transition-colors text-left"
                >
                  Shopping Bag
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('checkout')}
                  className="hover:text-on-primary transition-colors text-left"
                >
                  Shipping &amp; Returns
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="hover:text-on-primary transition-colors text-left"
                >
                  Size &amp; Fit Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('confirmation')}
                  className="hover:text-on-primary transition-colors text-left"
                >
                  Order Status
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-label-sm uppercase tracking-widest text-on-primary-container/70 mb-4">
              Flagship Atelier
            </h4>
            <p className="font-body text-body-md text-on-primary-container/90">
              142 Mercer Street
              <br />
              New York, NY 10012
              <br />
              concierge@stylenest.com
            </p>
            <button
              type="button"
              onClick={onSelectDefaultProduct}
              className="mt-3 font-label text-label-sm uppercase tracking-wider text-on-primary-container/80 underline underline-offset-4 hover:text-on-primary"
            >
              Featured Atelier Piece
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-body-sm text-on-primary-container/70">
          <p>© 2026 StyleNest. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-on-primary transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-on-primary transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

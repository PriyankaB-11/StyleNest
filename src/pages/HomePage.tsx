import { FormEvent, useState } from 'react';
import { EDITORIAL_IMAGES, PRODUCTS, TRENDING_EDITS } from '../data/catalog';
import { PageRoute, Product } from '../types/store';
import { EditorialImage } from '../components/EditorialImage';
import { ProductCard } from '../components/ProductCard';

interface HomePageProps {
  wishlistIds: string[];
  onNavigate: (route: PageRoute, sectionId?: string) => void;
  onOpenProduct: (productId: string) => void;
  onToggleWishlist: (productId: string) => void;
  onAddToBag: (product: Product) => void;
}

export function HomePage({
  wishlistIds,
  onNavigate,
  onOpenProduct,
  onToggleWishlist,
  onAddToBag,
}: HomePageProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div>
      {/* Cinematic Hero Section */}
      <section className="relative w-full bg-surface-container-low overflow-hidden">
        <div className="relative min-h-[520px] md:min-h-[640px] lg:min-h-[700px] flex items-end md:items-center">
          <EditorialImage
            src={EDITORIAL_IMAGES.hero}
            alt="StyleNest Autumn Winter tailored wool outerwear editorial"
            fallbackLabel="StyleNest Atelier"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/70 md:bg-gradient-to-r md:from-primary/85 md:via-primary/65 md:to-primary/25" />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <div className="max-w-xl text-on-primary">
              <p className="font-label text-label-sm uppercase tracking-widest text-on-primary mb-4">
                Autumn / Winter Collection
              </p>
              <h1 className="font-display text-display-lg-mobile md:text-display-lg text-balance mb-5">
                Discover Your Style. Define Your Story.
              </h1>
              <p className="font-body text-body-lg text-on-primary text-pretty mb-8 max-w-md">
                Architectural silhouettes crafted in double-faced cashmere, Italian virgin wool, and fluid mulberry silk.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('men')}
                  className="inline-flex items-center justify-center bg-surface text-on-surface px-7 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-surface-variant transition-colors duration-150 whitespace-nowrap"
                >
                  Shop Men
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('women')}
                  className="inline-flex items-center justify-center bg-primary/60 text-on-primary border border-on-primary px-7 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary/80 transition-colors duration-150 whitespace-nowrap"
                >
                  Shop Women
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Collections */}
      <section id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-outline-variant pb-5">
          <div>
            <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-2">
              Curated Edits
            </p>
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Trending Collections
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('women')}
            className="font-label text-label-md uppercase tracking-wider text-on-surface underline underline-offset-4 hover:text-secondary transition-colors duration-150 self-start sm:self-auto"
          >
            Explore All Edits
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TRENDING_EDITS.map((edit) => (
            <button
              key={edit.id}
              type="button"
              onClick={() => onNavigate(edit.targetRoute)}
              className="group flex flex-col bg-surface h-full text-left"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container-low mb-4">
                <EditorialImage
                  src={edit.image}
                  alt={edit.title}
                  fallbackLabel={edit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>
              <header className="flex flex-col gap-1">
                <p className="font-label text-label-sm text-secondary uppercase">
                  {edit.kicker}
                </p>
                <h3 className="font-headline text-headline-sm text-on-surface">
                  {edit.title}
                </h3>
              </header>
              <p className="font-body text-body-md text-on-surface-variant mt-1">
                {edit.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* New Arrivals Product Grid */}
      <section id="new-arrivals" className="bg-surface-container-low py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-2">
                Just Arrived
              </p>
              <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
                New Arrivals
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('women')}
                className="font-label text-label-md uppercase tracking-wider text-on-surface underline underline-offset-4 hover:text-secondary"
              >
                Shop Women
              </button>
              <span className="text-outline-variant" aria-hidden="true">
                /
              </span>
              <button
                type="button"
                onClick={() => onNavigate('men')}
                className="font-label text-label-md uppercase tracking-wider text-on-surface underline underline-offset-4 hover:text-secondary"
              >
                Shop Men
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                cardSurfaceClass="bg-surface p-3"
                onOpenProduct={onOpenProduct}
                onToggleWishlist={onToggleWishlist}
                onAddToBag={onAddToBag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Editorial Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-surface-variant overflow-hidden">
          <div className="lg:col-span-7 relative min-h-[320px] md:min-h-[440px]">
            <EditorialImage
              src={EDITORIAL_IMAGES.cashmereCapsuleBanner}
              alt="The Atelier Cashmere Capsule"
              fallbackLabel="The Cashmere Edit"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-3">
              Limited Capsule
            </p>
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              The Cashmere Edit
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant text-pretty mb-8">
              Unlined outerwear and fine-gauge knits crafted from traceable Mongolian cashmere, finished by hand in Milan.
            </p>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('women')}
                className="inline-flex items-center justify-center bg-primary text-on-primary px-7 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors duration-150 whitespace-nowrap"
              >
                Discover Capsule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections (Dual Split) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            type="button"
            onClick={() => onNavigate('men')}
            className="group relative aspect-[4/3] overflow-hidden bg-surface-container-low flex items-end p-8 text-left"
          >
            <EditorialImage
              src={EDITORIAL_IMAGES.mensModernTailoring}
              alt="Men's Outerwear & Tailoring"
              fallbackLabel="Men's Modern Tailoring"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/55 to-primary/20" />
            <div className="relative z-10 text-on-primary">
              <p className="font-label text-label-sm uppercase tracking-widest text-on-primary mb-1">
                Featured Collection
              </p>
              <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-2">
                Men&apos;s Modern Tailoring
              </h3>
              <span className="font-label text-label-md uppercase tracking-wider underline underline-offset-4">
                Shop Collection
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('women')}
            className="group relative aspect-[4/3] overflow-hidden bg-surface-container-low flex items-end p-8 text-left"
          >
            <EditorialImage
              src={EDITORIAL_IMAGES.womensFluidSilhouettes}
              alt="Women's Essential Silhouettes"
              fallbackLabel="Women's Fluid Silhouettes"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/55 to-primary/20" />
            <div className="relative z-10 text-on-primary">
              <p className="font-label text-label-sm uppercase tracking-widest text-on-primary mb-1">
                Featured Collection
              </p>
              <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-2">
                Women&apos;s Fluid Silhouettes
              </h3>
              <span className="font-label text-label-md uppercase tracking-wider underline underline-offset-4">
                Shop Collection
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="border-t border-outline-variant bg-surface-container-low py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-3">
            Private Client List
          </p>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3">
            Receive Seasonal Lookbooks
          </h2>
          <p className="font-body text-body-md text-on-surface-variant text-pretty mb-8">
            Be the first to preview new atelier releases, private trunk shows, and editorial stories.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (subscribed) setSubscribed(false);
              }}
              aria-label="Email address"
              placeholder="Enter your email address"
              className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-body text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary px-7 py-3 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors duration-150 whitespace-nowrap"
            >
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

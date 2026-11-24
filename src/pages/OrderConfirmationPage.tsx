import { formatCurrency } from '../data/catalog';
import { OrderReceipt, PageRoute } from '../types/store';
import { EditorialImage } from '../components/EditorialImage';

interface OrderConfirmationPageProps {
  receipt: OrderReceipt;
  onNavigate: (route: PageRoute) => void;
}

export function OrderConfirmationPage({
  receipt,
  onNavigate,
}: OrderConfirmationPageProps) {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <div className="w-12 h-12 rounded-full bg-success/10 text-success inline-flex items-center justify-center mb-5">
          <span className="material-symbols-outlined text-headline-sm" aria-hidden="true">
            check
          </span>
        </div>
        <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-2">
          Order Confirmed
        </p>
        <h1 className="font-display text-display-md-mobile md:text-display-md text-on-surface mb-4">
          Thank You, {receipt.shipping.firstName}
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant text-pretty max-w-lg mx-auto">
          Your order{' '}
          <span className="font-mono text-mono-md text-on-surface">
            {receipt.orderNumber}
          </span>{' '}
          has been received. A confirmation and tracking dossier have been sent to{' '}
          <span className="text-on-surface">{receipt.shipping.email}</span>.
        </p>
      </div>

      {/* Receipt Card */}
      <section className="bg-surface-container-low border border-outline-variant/60 p-6 sm:p-10 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-outline-variant">
          <div>
            <h2 className="font-label text-label-sm uppercase tracking-wider text-secondary mb-2">
              Shipping Destination
            </h2>
            <p className="font-body text-body-md text-on-surface">
              {receipt.shipping.firstName} {receipt.shipping.lastName}
              <br />
              {receipt.shipping.street}
              <br />
              {receipt.shipping.city}, {receipt.shipping.state} {receipt.shipping.postalCode}
            </p>
          </div>
          <div>
            <h2 className="font-label text-label-sm uppercase tracking-wider text-secondary mb-2">
              Estimated Delivery
            </h2>
            <p className="font-body text-body-md text-on-surface">
              Express Atelier Courier
              <br />
              {receipt.estimatedDelivery}
            </p>
          </div>
        </div>

        {/* Items */}
        <div className="py-6 flex flex-col gap-5 border-b border-outline-variant">
          {receipt.items.map((item) => (
            <div
              key={`${item.productId}-${item.color}-${item.size}`}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-20 bg-surface-container shrink-0 overflow-hidden">
                <EditorialImage
                  src={item.image}
                  alt={item.name}
                  fallbackLabel={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex justify-between gap-4">
                <div>
                  <p className="font-title text-title-md text-on-surface">{item.name}</p>
                  <p className="font-body text-body-sm text-on-surface-variant">
                    {item.color} · Size {item.size} · Qty {item.quantity}
                  </p>
                </div>
                <p className="font-body text-body-md text-on-surface tabular-nums">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="pt-6 flex flex-col gap-2.5 font-body text-body-md">
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Subtotal</span>
            <span className="text-on-surface tabular-nums">
              {formatCurrency(receipt.subtotal)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Express Shipping</span>
            {receipt.shippingFee === 0 ? (
              <span className="text-success font-medium">Complimentary</span>
            ) : (
              <span className="text-on-surface tabular-nums">
                {formatCurrency(receipt.shippingFee)}
              </span>
            )}
          </div>
          <div className="flex justify-between items-baseline pt-3 border-t border-outline-variant/60">
            <span className="font-title text-title-md text-on-surface">Total Paid</span>
            <span className="font-headline text-headline-md text-on-surface tabular-nums">
              {formatCurrency(receipt.total)}
            </span>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors duration-150 whitespace-nowrap"
        >
          Continue Shopping
        </button>
        <button
          type="button"
          onClick={() => onNavigate('women')}
          className="inline-flex items-center justify-center bg-transparent text-on-surface border border-primary px-8 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-surface-container-low transition-colors duration-150 whitespace-nowrap"
        >
          Explore New Arrivals
        </button>
      </div>
    </div>
  );
}

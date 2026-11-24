import { FormEvent, useState } from 'react';
import { formatCurrency } from '../data/catalog';
import { CartItem, OrderReceipt, PageRoute, ShippingAddress } from '../types/store';
import { EditorialImage } from '../components/EditorialImage';

interface CheckoutPageProps {
  items: CartItem[];
  onNavigate: (route: PageRoute) => void;
  onCompleteOrder: (receipt: OrderReceipt) => void;
}

export function CheckoutPage({
  items,
  onNavigate,
  onCompleteOrder,
}: CheckoutPageProps) {
  const [form, setForm] = useState<ShippingAddress>({
    email: 'claire.dubois@atelier.com',
    firstName: 'Claire',
    lastName: 'Dubois',
    street: '418 Broome Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10013',
  });
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expiry, setExpiry] = useState('09 / 28');
  const [cvc, setCvc] = useState('842');

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 250 || subtotal === 0 ? 0 : 25;
  const total = subtotal + shippingFee;
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const receipt: OrderReceipt = {
      orderNumber: '#SN-2026-8492',
      dateLabel: 'November 24, 2026',
      estimatedDelivery: 'November 27 – November 28, 2026',
      shipping: { ...form },
      items: items.map((i) => ({ ...i })),
      subtotal,
      shippingFee,
      total,
    };
    onCompleteOrder(receipt);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-display text-display-md-mobile md:text-display-md text-on-surface mb-4">
          Your Shopping Bag is Empty
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant mb-8">
          Add pieces to your bag before proceeding to checkout.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('women')}
          className="bg-primary text-on-primary px-8 py-3.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors"
        >
          Explore Collection
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-10">
          <div>
            <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-2">
              Step 1 of 2
            </p>
            <h1 className="font-display text-display-md-mobile md:text-display-md text-on-surface">
              Shipping &amp; Payment
            </h1>
          </div>

          {/* Contact Information */}
          <section className="flex flex-col gap-4 border-t border-outline-variant pt-6">
            <h2 className="font-headline text-headline-sm text-on-surface">
              Contact Information
            </h2>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-md text-on-surface uppercase">
                Email Address
              </span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-body text-body-md text-on-surface focus:border-primary focus:outline-none"
              />
            </label>
          </section>

          {/* Shipping Address */}
          <section className="flex flex-col gap-4 border-t border-outline-variant pt-6">
            <h2 className="font-headline text-headline-sm text-on-surface">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-on-surface uppercase">
                  First Name
                </span>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-body text-body-md text-on-surface focus:border-primary focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-on-surface uppercase">
                  Last Name
                </span>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-body text-body-md text-on-surface focus:border-primary focus:outline-none"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-md text-on-surface uppercase">
                Street Address
              </span>
              <input
                type="text"
                required
                value={form.street}
                onChange={(e) => setForm({ ...form, street: e.target.value })}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-body text-body-md text-on-surface focus:border-primary focus:outline-none"
              />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-on-surface uppercase">
                  City
                </span>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-body text-body-md text-on-surface focus:border-primary focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-on-surface uppercase">
                  State
                </span>
                <input
                  type="text"
                  required
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-body text-body-md text-on-surface focus:border-primary focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-on-surface uppercase">
                  Postal Code
                </span>
                <input
                  type="text"
                  required
                  value={form.postalCode}
                  onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-body text-body-md text-on-surface focus:border-primary focus:outline-none"
                />
              </label>
            </div>
          </section>

          {/* Payment Details */}
          <section className="flex flex-col gap-4 border-t border-outline-variant pt-6">
            <h2 className="font-headline text-headline-sm text-on-surface">
              Payment Method
            </h2>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-md text-on-surface uppercase">
                Card Number
              </span>
              <input
                type="text"
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-mono text-mono-md text-on-surface focus:border-primary focus:outline-none"
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-on-surface uppercase">
                  Expiration
                </span>
                <input
                  type="text"
                  required
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-mono text-mono-md text-on-surface focus:border-primary focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-on-surface uppercase">
                  Security Code
                </span>
                <input
                  type="text"
                  required
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 font-mono text-mono-md text-on-surface focus:border-primary focus:outline-none"
                />
              </label>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-primary text-on-primary px-7 py-4 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors duration-150"
          >
            Complete Order — {formatCurrency(total)}
          </button>
        </form>

        {/* Order Summary Sidebar */}
        <aside className="lg:col-span-5 bg-surface-container-low p-6 sm:p-8 border border-outline-variant/60">
          <h2 className="font-headline text-headline-md text-on-surface mb-6 pb-4 border-b border-outline-variant tabular-nums">
            In Your Bag ({totalCount})
          </h2>

          <div className="flex flex-col gap-5 pb-6 border-b border-outline-variant">
            {items.map((item) => (
              <div key={`${item.productId}-${item.color}-${item.size}`} className="flex gap-4">
                <div className="w-16 h-20 bg-surface-container shrink-0 overflow-hidden">
                  <EditorialImage
                    src={item.image}
                    alt={item.name}
                    fallbackLabel={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex justify-between gap-2">
                  <div>
                    <p className="font-title text-title-md text-on-surface">{item.name}</p>
                    <p className="font-body text-body-sm text-on-surface-variant">
                      {item.color} · {item.size} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="font-body text-body-md text-on-surface tabular-nums">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 py-5 font-body text-body-md border-b border-outline-variant">
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Subtotal</span>
              <span className="text-on-surface tabular-nums">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Express Courier</span>
              {shippingFee === 0 ? (
                <span className="text-success font-medium">Complimentary</span>
              ) : (
                <span className="text-on-surface tabular-nums">
                  {formatCurrency(shippingFee)}
                </span>
              )}
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Taxes</span>
              <span className="text-on-surface tabular-nums">$0.00</span>
            </div>
          </div>

          <div className="pt-5 flex justify-between items-baseline">
            <span className="font-title text-title-md text-on-surface">Total</span>
            <span className="font-headline text-headline-md text-on-surface tabular-nums">
              {formatCurrency(total)}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}

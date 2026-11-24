interface SizeGuideModalProps {
  open: boolean;
  onClose: () => void;
}

const SIZE_ROWS = [
  { size: 'XS', chest: '33 – 35"', waist: '25 – 27"', hip: '35 – 37"', it: '38 / 44' },
  { size: 'S', chest: '35 – 37"', waist: '27 – 29"', hip: '37 – 39"', it: '40 / 46' },
  { size: 'M', chest: '37 – 39"', waist: '29 – 31"', hip: '39 – 41"', it: '42 / 48' },
  { size: 'L', chest: '39 – 42"', waist: '31 – 34"', hip: '41 – 44"', it: '44 / 50' },
  { size: 'XL', chest: '42 – 45"', waist: '34 – 37"', hip: '44 – 47"', it: '46 / 52' },
];

export function SizeGuideModal({ open, onClose }: SizeGuideModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60"
      role="dialog"
      aria-modal="true"
      aria-label="Size and Fit Guide"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-surface border border-outline-variant p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-outline-variant mb-6">
          <div>
            <p className="font-label text-label-sm uppercase tracking-widest text-secondary mb-1">
              Atelier Sizing
            </p>
            <h2 className="font-headline text-headline-md text-on-surface">
              Size &amp; Fit Guide
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close size guide"
            className="w-9 h-9 inline-flex items-center justify-center text-on-surface hover:text-secondary"
          >
            <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        <p className="font-body text-body-md text-on-surface-variant mb-6">
          StyleNest garments are cut for an architectural, slightly relaxed drape. Take your usual size for the intended atelier silhouette.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant font-label text-label-sm uppercase tracking-wider text-secondary">
                <th className="py-2.5 pr-4">Size</th>
                <th className="py-2.5 pr-4">Chest</th>
                <th className="py-2.5 pr-4">Waist</th>
                <th className="py-2.5 pr-4">Hip</th>
                <th className="py-2.5">Italian</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/60 font-body text-body-md text-on-surface tabular-nums">
              {SIZE_ROWS.map((row) => (
                <tr key={row.size}>
                  <td className="py-3 pr-4 font-medium">{row.size}</td>
                  <td className="py-3 pr-4">{row.chest}</td>
                  <td className="py-3 pr-4">{row.waist}</td>
                  <td className="py-3 pr-4">{row.hip}</td>
                  <td className="py-3">{row.it}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-outline-variant flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-sm font-label text-label-md uppercase tracking-widest hover:bg-primary-container transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}

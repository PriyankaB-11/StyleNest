import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function EditorialImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center bg-surface-container-low text-on-surface-variant p-6 text-center select-none"
      >
        <span className="font-headline text-headline-sm text-on-surface mb-1">
          {fallbackLabel || 'StyleNest'}
        </span>
        <span className="font-label text-label-sm uppercase tracking-widest text-secondary">
          Atelier Archive
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

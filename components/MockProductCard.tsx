'use client';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image?: string;
  tagline?: string;
  href?: string;
};

export default function MockProductCard({
  name,
  category,
  price,
  originalPrice,
  image = '',
  tagline,
  href = '/shop',
}: Props) {
  const hasImage = Boolean(image?.trim());
  const formatPrice = (val: number) => `GH\u20B5${val.toFixed(2)}`;

  return (
    <article className="group flex flex-col h-full boutique-card-hover">
      <Link
        href={href}
        className="relative block aspect-[3/4] rounded-xl overflow-hidden border border-brand-rose/10 bg-brand-latte/30 mb-3 shadow-sm transition-shadow duration-500 active:shadow-boutique boutique-image-zoom md:glass-card md:rounded-2xl md:border-white/40 md:mb-4 md:group-hover:shadow-boutique-glow"
      >
        {hasImage ? (
          <Image src={image} alt={name} fill className="boutique-img-target object-cover object-top" sizes="(max-width: 768px) 50vw, 25vw" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 m-3 rounded-xl border-2 border-dashed border-brand-rose/25 bg-brand-cream/50">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-rose/70">Featured</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-brand-plum/40 text-center">Image coming soon</span>
          </div>
        )}
        {hasImage && (
          <>
            <span className="boutique-image-vignette" aria-hidden />
            <span className="boutique-image-shine" aria-hidden />
          </>
        )}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-plum/25 to-transparent opacity-0 transition-opacity duration-300 group-active:opacity-100 group-hover:opacity-100 pointer-events-none" />
        <div className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden sm:block">
          <span className="block w-full text-center py-2.5 rounded-full glass-plum text-brand-cream text-xs font-semibold tracking-wide">
            View piece
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-grow px-0.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-sage mb-1.5">{category}</p>
        <Link href={href}>
          <h3 className="font-serif text-xl md:text-[1.35rem] leading-snug text-brand-plum mb-1 group-hover:text-brand-rose transition-colors duration-300">
            {name}
          </h3>
        </Link>
        {tagline && (
          <p className="text-xs text-brand-plum/55 mb-3 leading-relaxed line-clamp-2">{tagline}</p>
        )}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="font-semibold text-brand-plum tracking-tight">{formatPrice(price)}</span>
          {originalPrice != null && (
            <span className="text-sm text-brand-plum/45 line-through">{formatPrice(originalPrice)}</span>
          )}
        </div>
      </div>
    </article>
  );
}

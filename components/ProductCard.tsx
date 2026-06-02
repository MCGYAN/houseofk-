'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import LazyImage from './LazyImage';
import { useCart } from '@/context/CartContext';

const COLOR_MAP: Record<string, string> = {
  black: '#000000', white: '#FFFFFF', red: '#EF4444', blue: '#3B82F6',
  navy: '#1E3A5F', green: '#22C55E', yellow: '#EAB308', orange: '#F97316',
  pink: '#EC4899', purple: '#A855F7', brown: '#92400E', beige: '#D4C5A9',
  grey: '#6B7280', gray: '#6B7280', cream: '#FFFDD0', teal: '#14B8A6',
  maroon: '#800000', coral: '#FF7F50', burgundy: '#800020', olive: '#808000',
  tan: '#D2B48C', khaki: '#C3B091', charcoal: '#36454F', ivory: '#FFFFF0',
  gold: '#FFD700', silver: '#C0C0C0', rose: '#FF007F', lavender: '#E6E6FA',
  mint: '#98FB98', peach: '#FFDAB9', wine: '#722F37', denim: '#1560BD',
  nude: '#E3BC9A', camel: '#C19A6B', sage: '#BCB88A', rust: '#B7410E',
  mustard: '#FFDB58', plum: '#8E4585', lilac: '#C8A2C8', stone: '#928E85',
  sand: '#C2B280', taupe: '#483C32', mauve: '#E0B0FF', sky: '#87CEEB',
  forest: '#228B22', cobalt: '#0047AB', emerald: '#50C878', scarlet: '#FF2400',
  aqua: '#00FFFF', turquoise: '#40E0D0', indigo: '#4B0082', crimson: '#DC143C',
  magenta: '#FF00FF', cyan: '#00FFFF', chocolate: '#7B3F00', coffee: '#6F4E37',
};

export function getColorHex(colorName: string): string | null {
  const lower = colorName.toLowerCase().trim();
  if (COLOR_MAP[lower]) return COLOR_MAP[lower];
  for (const [key, val] of Object.entries(COLOR_MAP)) {
    if (lower.includes(key)) return val;
  }
  return null;
}

export interface ColorVariant {
  name: string;
  hex: string;
}

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  inStock?: boolean;
  maxStock?: number;
  moq?: number;
  hasVariants?: boolean;
  minVariantPrice?: number;
  colorVariants?: ColorVariant[];
}

export default function ProductCard({
  id,
  slug,
  name,
  price,
  originalPrice,
  image,
  badge,
  inStock = true,
  maxStock = 50,
  moq = 1,
  hasVariants = false,
  minVariantPrice,
  colorVariants = [],
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const displayPrice = hasVariants && minVariantPrice ? minVariantPrice : price;
  const discount = originalPrice ? Math.round((1 - displayPrice / originalPrice) * 100) : 0;
  const MAX_SWATCHES = 5;

  const formatPrice = (val: number) => `GH\u20B5${val.toFixed(2)}`;
  const renderNameWithPlainAmpersand = (text: string) =>
    text.split('&').map((part, index, arr) => (
      <Fragment key={`${part}-${index}`}>
        {part}
        {index < arr.length - 1 && <span className="font-sans not-italic">&amp;</span>}
      </Fragment>
    ));

  return (
    <article className="group h-full flex flex-col boutique-card-hover">
      <Link
        href={`/product/${slug}`}
        className="relative block aspect-[3/4] overflow-hidden rounded-xl mb-4 border border-brand-rose/10 bg-brand-latte/30 shadow-sm transition-shadow duration-500 ease-boutique active:shadow-boutique boutique-image-zoom md:rounded-2xl md:glass-card md:border-white/45 md:group-hover:shadow-boutique-glow"
      >
        <LazyImage
          src={image}
          alt={name}
          className="boutique-img-target w-full h-full object-cover object-top"
        />

        <span className="boutique-image-vignette" aria-hidden />
        <span className="boutique-image-shine" aria-hidden />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-plum/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-active:opacity-100 group-hover:opacity-100 pointer-events-none" />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <span className="glass-cream text-brand-plum border border-white/50 text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 rounded-full">
              {badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-brand-plum text-brand-cream text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {!inStock && (
          <div className="absolute inset-0 bg-brand-cream/70 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-brand-plum text-brand-cream px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase">
              Sold out
            </span>
          </div>
        )}

        {inStock && (
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-boutique hidden lg:block">
            {hasVariants ? (
              <span className="w-full glass-plum text-brand-cream py-3 rounded-full font-semibold text-sm shadow-boutique flex items-center justify-center gap-2">
                <i className="ri-sparkling-2-line" />
                View options
              </span>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart({ id, name, price, image, quantity: moq, slug, maxStock, moq });
                }}
                className="w-full bg-brand-plum text-brand-cream hover:bg-brand-dark py-3 rounded-full font-semibold text-sm shadow-boutique transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-shopping-bag-3-line" />
                {moq > 1 ? `Add ${moq}` : 'Quick add'}
              </button>
            )}
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-grow px-0.5">
        <Link href={`/product/${slug}`}>
          <h3 className="font-serif text-xl md:text-[1.35rem] leading-snug text-brand-plum mb-1.5 group-hover:text-brand-rose transition-colors duration-300 line-clamp-2">
            {renderNameWithPlainAmpersand(name)}
          </h3>
        </Link>

        {colorVariants.length > 0 && (
          <div className="flex items-center gap-1.5 mb-2.5">
            {colorVariants.slice(0, MAX_SWATCHES).map((color) => (
              <button
                key={color.name}
                title={color.name}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveColor(activeColor === color.name ? null : color.name);
                }}
                className={`w-4 h-4 rounded-full border transition-all duration-200 flex-shrink-0 ${
                  activeColor === color.name
                    ? 'ring-2 ring-offset-1 ring-brand-rose scale-110'
                    : 'hover:scale-110'
                } ${color.hex === '#FFFFFF' ? 'border-brand-rose/30' : 'border-transparent'}`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
            {colorVariants.length > MAX_SWATCHES && (
              <span className="text-xs text-brand-plum/50 ml-0.5">+{colorVariants.length - MAX_SWATCHES}</span>
            )}
          </div>
        )}

        <div className="flex items-baseline gap-2 mb-2">
          {hasVariants && minVariantPrice ? (
            <span className="font-semibold text-brand-plum tracking-tight">From {formatPrice(minVariantPrice)}</span>
          ) : (
            <span className="font-semibold text-brand-plum tracking-tight">{formatPrice(price)}</span>
          )}
          {originalPrice && (
            <span className="text-sm text-brand-plum/45 line-through">{formatPrice(originalPrice)}</span>
          )}
        </div>

        <div className="mt-auto pt-1 lg:hidden">
          {hasVariants ? (
            <Link
              href={`/product/${slug}`}
              className="w-full border border-brand-rose/25 text-brand-plum py-2.5 rounded-full text-sm font-semibold hover:bg-brand-latte/50 transition-colors flex items-center justify-center gap-1"
            >
              View options
            </Link>
          ) : (
            <button
              onClick={() => addToCart({ id, name, price, image, quantity: moq, slug, maxStock, moq })}
              disabled={!inStock}
              className="w-full bg-brand-plum text-brand-cream py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {moq > 1 ? `Add ${moq}` : 'Add to bag'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

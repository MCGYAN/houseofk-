import { SITE_NAME } from '@/lib/site-brand';
import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, backgroundImage, eyebrow = SITE_NAME }: PageHeroProps) {
  return (
    <div className="boutique-editorial-hero relative overflow-hidden min-h-[38vh] md:min-h-[44vh] flex items-center justify-center">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover opacity-70 scale-105"
            priority
            sizes="100vw"
            quality={84}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-plum/40 via-brand-plum/65 to-brand-plum/95" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-plum via-brand-dark to-brand-plum" />
          <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-brand-rose/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-rose/40 to-transparent" />
        </>
      )}

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18 text-center z-10 flex flex-col items-center">
        <span className="inline-flex items-center gap-3 glass-plum rounded-full px-5 py-2 text-brand-champagne text-[10px] md:text-xs tracking-[0.32em] uppercase font-semibold mb-5 animate-fade-in-up">
          <span className="w-6 md:w-10 h-px bg-brand-rose/50" />
          {eyebrow}
          <span className="w-6 md:w-10 h-px bg-brand-rose/50" />
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-brand-cream mb-4 md:mb-5 leading-[1.08] animate-fade-in-up animate-delay-100 px-2">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/75 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200 px-4">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full boutique-divider opacity-60" />
    </div>
  );
}

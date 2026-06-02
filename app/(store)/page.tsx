'use client';

import {
  SITE_NAME,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_SLIDES,
  FEATURED_BENEFITS,
  CUSTOMER_REVIEWS,
  ABOUT_HEADLINE,
  ABOUT_BODY,
} from '@/lib/site-brand';
import { MOCK_SHOP_CATEGORIES, MOCK_FEATURED_PRODUCTS } from '@/lib/mock-catalog';
import Link from 'next/link';
import HeroImageSlider from '@/components/HeroImageSlider';
import MockCategoryCard from '@/components/MockCategoryCard';
import MockProductCard from '@/components/MockProductCard';
import AnimatedSection, { AnimatedGrid } from '@/components/AnimatedSection';
import NewsletterSection from '@/components/NewsletterSection';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Home() {
  usePageTitle('');

  return (
    <main className="min-h-screen bg-brand-cream">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-latte">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-latte/80 to-brand-nude/30" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-brand-rose/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-16 w-96 h-96 rounded-full bg-brand-sage/10 blur-3xl animate-float animate-delay-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
          <span className="font-serif text-[14vw] text-brand-plum whitespace-nowrap tracking-tight">BOUTIQUE</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-brand-rose mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-rose/50" />
                {SITE_NAME}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-brand-plum leading-[1.02] mb-6">
                {HERO_HEADLINE}
              </h1>
              <p className="text-brand-plum/75 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                {HERO_SUBHEADLINE}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop" className="boutique-btn-primary">
                  Enter the shop
                </Link>
                <Link href="#shop-by-category" className="boutique-btn-secondary">
                  Browse collections
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative md:p-4 md:glass-card md:rounded-[2rem] md:shadow-boutique-lg">
                <HeroImageSlider slides={HERO_SLIDES} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP (tablet & desktop only) */}
      <section className="hidden md:block py-10 md:py-14 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl glass-frosted overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-rose/60 to-transparent"
              aria-hidden
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-rose/15">
              {FEATURED_BENEFITS.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="group relative px-6 py-8 md:px-8 md:py-10 text-center"
                >
                  <span
                    className={`block font-serif text-2xl md:text-3xl tabular-nums mb-3 transition-colors duration-300 ${
                      i === 0 ? 'text-brand-sage/70 group-hover:text-brand-sage' : 'text-brand-rose/25 group-hover:text-brand-rose/50'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="block w-6 h-px bg-brand-rose/50 mx-auto mb-4 group-hover:w-10 transition-all duration-300" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-rose mb-2">
                    {benefit.label}
                  </p>
                  <p className="font-serif text-base md:text-lg text-brand-plum leading-snug">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SHOP BY CATEGORY */}
      <section id="shop-by-category" className="py-16 md:py-24 bg-brand-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <span className="boutique-section-eyebrow">Explore</span>
            <h2 className="boutique-section-title mb-3">Shop By Category</h2>
            <p className="text-brand-plum/70">Four ways to find your next outfit.</p>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {MOCK_SHOP_CATEGORIES.map((cat, i) => (
              <MockCategoryCard
                key={cat.id}
                label={cat.label}
                href={cat.href}
                image={cat.image}
                index={i}
              />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* SECTION 4 — FEATURED PRODUCTS */}
      <section id="featured-products" className="py-16 md:py-24 bg-white/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <span className="boutique-section-eyebrow text-brand-sage">Curated For You</span>
            <h2 className="boutique-section-title mb-3">Featured Pieces</h2>
            <p className="text-brand-plum/70">Standout pieces from dresses, sets, tops, and more.</p>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {MOCK_FEATURED_PRODUCTS.map((product) => (
              <MockProductCard
                key={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                originalPrice={'originalPrice' in product ? product.originalPrice : undefined}
                image={product.image}
                tagline={product.tagline}
                href="/shop"
              />
            ))}
          </AnimatedGrid>
          <div className="text-center mt-12">
            <Link href="/shop" className="boutique-btn-secondary">
              View all pieces
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CUSTOMER REVIEWS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-plum mb-3">
              Loved By Fashion Lovers Across Ghana
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMER_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 md:p-8 boutique-card-hover"
              >
                <div className="flex gap-0.5 text-brand-rose mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <i key={j} className="ri-star-fill text-sm" />
                  ))}
                </div>
                <p className="text-brand-plum/90 text-sm md:text-base leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — ABOUT */}
      <section className="py-16 md:py-24 bg-brand-latte/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-plum mb-6">{ABOUT_HEADLINE}</h2>
            <p className="text-brand-plum/80 text-lg leading-relaxed">{ABOUT_BODY}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-brand-plum font-semibold hover:text-brand-rose transition-colors"
            >
              Learn more <i className="ri-arrow-right-line" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 — NEWSLETTER */}
      <section className="py-16 md:py-20 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="glass-frosted rounded-3xl p-8 md:p-12">
            <NewsletterSection />
          </div>
        </div>
      </section>
    </main>
  );
}

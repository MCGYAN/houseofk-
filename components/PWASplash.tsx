'use client';

import { SITE_NAME, SITE_TAGLINE, LOGO_PATH, CONTACT_EMAIL, CONTACT_PHONE, BUSINESS_ADDRESS, SOCIAL_INSTAGRAM, SOCIAL_TIKTOK, CATALOG_PDF_PREFIX, OG_IMAGE_PATH, HERO_IMAGE_PATH, DEFAULT_PRODUCT_BRAND } from '@/lib/site-brand';
import { useState, useEffect } from 'react';

export default function PWASplash() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Only show splash in standalone mode
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    // Only show on first load (not on subsequent navigations)
    const hasShownSplash = sessionStorage.getItem('splashShown');

    if (isStandalone && !hasShownSplash) {
      setShowSplash(true);
      sessionStorage.setItem('splashShown', 'true');

      const timer = setTimeout(() => setShowSplash(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!showSplash) return null;

  return (
    <div className="pwa-splash" aria-hidden="true">
      <div className="pwa-splash-logo mb-6">
        <img
          src={LOGO_PATH}
          alt={SITE_NAME}
          className="w-48 max-w-[80vw] h-auto object-contain"
        />
      </div>
      <h1 className="text-brand-cream text-xl font-bold font-serif mb-2">{SITE_NAME}</h1>
      <p className="text-brand-champagne text-sm font-medium mb-8">{SITE_TAGLINE}</p>
      <div className="pwa-splash-dots flex gap-1.5">
        <span className="w-2 h-2 bg-brand-rose rounded-full" />
        <span className="w-2 h-2 bg-brand-cream rounded-full" />
        <span className="w-2 h-2 bg-brand-rose rounded-full" />
      </div>
    </div>
  );
}

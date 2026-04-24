import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://example.com';

export const SEO_KEYWORDS = [
  'women’s fashion Ghana',
  'boutique Accra',
  'stylish outfits Ghana',
  'ladies wear Accra',
  'premium fashion Ghana',
  'House of Elle',
];

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildPageMetadata({ title, description, path = '', image = '/opengraph-image' }: SeoInput): Metadata {
  return {
    title,
    description,
    keywords: SEO_KEYWORDS.join(', '),
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteUrl}${path}`,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'en_GH',
      siteName: 'House of Elle',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const pageSeoTemplates = {
  home: () =>
    buildPageMetadata({
      title: 'House of Elle | Premium Women’s Fashion in Accra',
      description:
        'Shop premium women’s fashion at House of Elle. Discover stylish, modern outfits designed for confidence and elegance. Located in Accra, Ghana.',
      path: '/',
    }),
  shop: () =>
    buildPageMetadata({
      title: 'Shop Women’s Fashion in Accra | House of Elle',
      description:
        'Browse premium women’s fashion at House of Elle. Discover confidence-boosting outfits curated for modern women in Accra and beyond.',
      path: '/shop',
    }),
  categories: () =>
    buildPageMetadata({
      title: 'Fashion Categories | House of Elle',
      description:
        'Explore fashion categories at House of Elle and find premium styles for work, events, and everyday elegance in Accra, Ghana.',
      path: '/categories',
    }),
  about: () =>
    buildPageMetadata({
      title: 'About House of Elle | Premium Fashion Brand',
      description:
        'Learn about House of Elle, a premium fashion and lifestyle brand in Accra serving modern women with elegant, confidence-led style.',
      path: '/about',
    }),
  contact: () =>
    buildPageMetadata({
      title: 'Contact House of Elle | Accra Boutique',
      description:
        'Contact House of Elle in Spintex Lashibi, Accra. Reach us for personal styling support, orders, and premium fashion enquiries.',
      path: '/contact',
    }),
};

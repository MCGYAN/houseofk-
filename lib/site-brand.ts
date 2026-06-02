/**
 * House of K — brand identity & site copy
 */

export const SITE_NAME = 'House of K';
export const SITE_SHORT_NAME = 'House of K';
export const SITE_DESCRIPTION =
  'Trendy women\'s fashion in Kasoa, Ghana. Stylish outfits that turn heads — without breaking the bank.';
export const SITE_TAGLINE = 'Made To Be Seen.';
export const SITE_HERO_TAGLINE = 'Fashion That Gets Compliments.';
export const SITE_LOCATION_TAGLINE = 'Ofaakor, Kasoa, Ghana';

export const HERO_HEADLINE = 'FASHION THAT GETS COMPLIMENTS.';
export const HERO_SUBHEADLINE =
  'Discover trendy styles curated for confident women who love to stand out.';

export const SITE_URL = 'https://yourdomain.com';
export const CONTACT_EMAIL = 'akushika060@gmail.com';
export const CONTACT_PHONE = '';
export const BUSINESS_ADDRESS = 'Ofaakor, Kasoa, Ghana';
export const BUSINESS_CITY = 'Kasoa';
export const BUSINESS_COUNTRY = 'Ghana';

export const LOGO_VERSION = '3';
export const LOGO_PATH = `/logo.png?v=${LOGO_VERSION}`;
/** Plum + rose gold wordmark for light backgrounds (header). */
export const HEADER_LOGO_PATH = `/logo-header.png?v=${LOGO_VERSION}`;
/** Cream + rose gold wordmark for dark backgrounds (footer). */
export const FOOTER_LOGO_PATH = `/logo-footer.png?v=${LOGO_VERSION}`;

export function resolveSiteLogo(cmsValue?: string | null): string {
  const v = (cmsValue ?? '').trim().toLowerCase();
  if (!v) return LOGO_PATH;
  const legacy = ['house-of-elle', 'houseofelle', 'tiwa', 'logo.svg', 'logo-placeholder'];
  if (legacy.some((needle) => v.includes(needle))) return LOGO_PATH;
  return LOGO_PATH;
}

export const OG_IMAGE_PATH = '/og-image.png';
export const HERO_IMAGE_VERSION = '2';
export const HERO_IMAGE_PATH = `/hero.jpg?v=${HERO_IMAGE_VERSION}`;

export const HERO_SLIDES = [
  { src: `/hero.jpg?v=${HERO_IMAGE_VERSION}`, alt: 'Woman browsing trendy fashion at House of K boutique' },
  { src: `/hero-2.jpg?v=${HERO_IMAGE_VERSION}`, alt: 'Woman in burgundy maxi dress at House of K' },
  { src: `/hero-3.jpg?v=${HERO_IMAGE_VERSION}`, alt: 'Woman in beige dress shopping at House of K' },
] as const;

export const SOCIAL_INSTAGRAM = 'https://instagram.com/houseofk';
export const SOCIAL_TIKTOK = 'https://tiktok.com/@houseofk';
export const SOCIAL_SNAPCHAT = 'https://snapchat.com/add/houseofk';

export const DEFAULT_PRODUCT_BRAND = 'House of K';
export const CATALOG_PDF_PREFIX = 'house-of-k-catalog';

export const FEATURED_BENEFITS = [
  { label: 'Weekly', title: 'New Drops Every Week' },
  { label: 'Nationwide', title: 'Fast Delivery Across Ghana' },
  { label: 'Curated', title: "Affordable Fashion You'll Love" },
  { label: 'Secure', title: 'Secure Payments' },
] as const;

export const SHOP_CATEGORIES = [
  { label: 'Dresses', href: '/shop?category=dresses' },
  { label: 'Two Piece Sets', href: '/shop?category=two-piece-sets' },
  { label: 'Tops', href: '/shop?category=tops' },
  { label: 'New Arrivals', href: '/shop?sort=newest' },
] as const;

export const CUSTOMER_REVIEWS = [
  { text: 'Quality exceeded my expectations.', rating: 5 },
  { text: 'The outfit looked exactly like the pictures.', rating: 5 },
  { text: 'Fast delivery and amazing customer service.', rating: 5 },
  { text: 'One of my favorite fashion stores.', rating: 5 },
] as const;

export const ABOUT_HEADLINE = 'Confidence Starts With What You Wear';
export const ABOUT_BODY =
  "House of K is a women's fashion brand dedicated to helping women look good, feel confident, and express their personal style through fashion. Based in Ofaakor, Kasoa, we carefully curate trendy and stylish pieces for women who love staying ahead of fashion trends.";

export const BRAND_COLORS = {
  plum: '#4A2C3D',
  burgundy: '#4A2C3D',
  roseGold: '#BF8F7A',
  sage: '#84947A',
  cream: '#FAF6EF',
} as const;

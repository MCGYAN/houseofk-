/**
 * Frontend-only mock catalog — used when Supabase is not configured.
 * Replace with live data once NEXT_PUBLIC_SUPABASE_* env vars are set.
 */

import { isSupabaseConfigured } from '@/lib/supabase';

export function isMockCatalogMode(): boolean {
  return !isSupabaseConfigured();
}

export const MOCK_SHOP_CATEGORIES = [
  {
    id: 'dresses',
    label: 'Dresses',
    href: '/shop?category=dresses',
    image: '/categories/dresses.jpg?v=1',
  },
  {
    id: 'two-piece-sets',
    label: 'Two Piece Sets',
    href: '/shop?category=two-piece-sets',
    image: '/categories/two-piece-sets.jpg?v=1',
  },
  {
    id: 'tops',
    label: 'Tops',
    href: '/shop?category=tops',
    image: '/categories/tops.jpg?v=1',
  },
  {
    id: 'new-arrivals',
    label: 'New Arrivals',
    href: '/shop?sort=newest',
    image: '/categories/new-arrivals.jpg?v=1',
  },
] as const;

export type MockCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  parent_id: string | null;
  position: number;
};

export const MOCK_CATEGORIES: MockCategory[] = [
  {
    id: 'cat-dresses',
    name: 'Dresses',
    slug: 'dresses',
    description: 'Midi, maxi, and occasion dresses curated for every moment.',
    image_url: '/categories/dresses.jpg?v=1',
    parent_id: null,
    position: 1,
  },
  {
    id: 'cat-sets',
    name: 'Two Piece Sets',
    slug: 'two-piece-sets',
    description: 'Matching co-ords and lounge sets with effortless polish.',
    image_url: '/categories/two-piece-sets.jpg?v=1',
    parent_id: null,
    position: 2,
  },
  {
    id: 'cat-tops',
    name: 'Tops',
    slug: 'tops',
    description: 'Elevated basics and statement necklines for everyday chic.',
    image_url: '/categories/tops.jpg?v=1',
    parent_id: null,
    position: 3,
  },
  {
    id: 'cat-new',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    description: 'Fresh drops — limited pieces added to the boutique each week.',
    image_url: '/categories/new-arrivals.jpg?v=1',
    parent_id: null,
    position: 4,
  },
];

export type MockProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compare_at_price?: number;
  category: string;
  categorySlug: string;
  image: string;
  images?: string[];
  tagline?: string;
  rating_avg: number;
  quantity: number;
  moq: number;
  featured?: boolean;
};

const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 'mock-elena-ruched-midi',
    slug: 'elena-ruched-midi-dress',
    name: 'Elena Ruched Midi Dress',
    description:
      'A pleated midi with side ruching and a waist tie belt. Soft structure, flattering drape, and an easy day-to-evening silhouette.',
    price: 189,
    compare_at_price: 229,
    category: 'Dresses',
    categorySlug: 'dresses',
    image: '/products/elena-ruched-midi-dress.jpg?v=2',
    tagline: 'Pleated texture · side ruching · waist tie belt',
    rating_avg: 4.8,
    quantity: 24,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-milan-lounge-set',
    slug: 'milan-lounge-co-ord-set',
    name: 'Milan Lounge Co Ord Set',
    description:
      'Floral crop top paired with a tiered mini skirt and smocked waist. Relaxed resort energy with a refined finish.',
    price: 165,
    compare_at_price: 195,
    category: 'Two Piece Sets',
    categorySlug: 'two-piece-sets',
    image: '/products/milan-lounge-co-ord-set.jpg?v=2',
    tagline: 'Floral crop top · tiered mini skirt · smocked waist',
    rating_avg: 4.7,
    quantity: 18,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-mocha-milkmaid-top',
    slug: 'mocha-milkmaid-square-neck-top',
    name: 'Mocha Milkmaid Square Neck Top',
    description:
      'Square neckline, bishop sleeves, and a side zip in a warm mocha hue. Pairs with denim, skirts, or tailored trousers.',
    price: 95,
    category: 'Tops',
    categorySlug: 'tops',
    image: '/products/mocha-milkmaid-square-neck-top.jpg?v=1',
    tagline: 'Square neckline · bishop sleeves · side zip',
    rating_avg: 4.6,
    quantity: 30,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-bella-ribbed-top',
    slug: 'bella-ribbed-halter-neck-top',
    name: 'Bella Ribbed Halter Neck Top',
    description:
      'Ribbed knit with a collared halter and heart buttons. A playful staple that layers under blazers or stands alone.',
    price: 79,
    category: 'Tops',
    categorySlug: 'tops',
    image: '/products/bella-ribbed-halter-neck-top.jpg?v=1',
    tagline: 'Ribbed knit · collared halter · heart buttons',
    rating_avg: 4.5,
    quantity: 36,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sofia-satin-slip',
    slug: 'sofia-satin-slip-dress',
    name: 'Sofia Satin Slip Dress',
    description:
      'Satin-finish floral print with delicate spaghetti straps. Effortless evening elegance with a soft, fluid fall.',
    price: 199,
    compare_at_price: 249,
    category: 'New Arrivals',
    categorySlug: 'new-arrivals',
    image: '/products/sofia-satin-slip-dress.jpg?v=1',
    tagline: 'Satin finish · floral print · spaghetti straps',
    rating_avg: 4.9,
    quantity: 12,
    moq: 1,
    featured: true,
  },
];

export const MOCK_FEATURED_PRODUCTS = MOCK_PRODUCTS.filter((p) => p.featured).map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  category: p.category,
  price: p.price,
  originalPrice: p.compare_at_price,
  image: p.image,
  tagline: p.tagline,
}));

export function getMockCategories(): MockCategory[] {
  return MOCK_CATEGORIES;
}

export function getMockProductBySlug(slug: string): MockProduct | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
}

export type MockShopFilters = {
  search?: string | null;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  minRating?: number;
  sortBy?: string;
  page?: number;
  perPage?: number;
};

export function filterMockProducts(filters: MockShopFilters = {}) {
  const {
    search,
    category = 'all',
    priceMin = 0,
    priceMax = 5000,
    minRating = 0,
    sortBy = 'popular',
    page = 1,
    perPage = 9,
  } = filters;

  let results = [...MOCK_PRODUCTS];

  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tagline?.toLowerCase().includes(q) ?? false)
    );
  }

  if (category !== 'all') {
    if (category === 'new-arrivals') {
      results = results.filter((p) => p.categorySlug === 'new-arrivals');
    } else {
      results = results.filter((p) => p.categorySlug === category);
    }
  } else if (sortBy === 'new' || sortBy === 'newest') {
    results = results.filter((p) => p.categorySlug === 'new-arrivals' || p.featured);
  }

  if (priceMax < 5000) {
    results = results.filter((p) => p.price >= priceMin && p.price <= priceMax);
  }

  if (minRating > 0) {
    results = results.filter((p) => p.rating_avg >= minRating);
  }

  switch (sortBy) {
    case 'price-low':
      results.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      results.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      results.sort((a, b) => b.rating_avg - a.rating_avg);
      break;
    case 'new':
    case 'newest':
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    default:
      results.sort((a, b) => b.rating_avg - a.rating_avg);
      break;
  }

  const total = results.length;
  const from = (page - 1) * perPage;
  const pageItems = results.slice(from, from + perPage);

  return { products: pageItems, total, totalPages: Math.ceil(total / perPage) || 1 };
}

export function mockProductToCard(product: MockProduct) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    originalPrice: product.compare_at_price,
    image: product.image,
    rating: product.rating_avg,
    reviewCount: 0,
    badge: product.compare_at_price && product.compare_at_price > product.price ? 'Sale' : undefined,
    inStock: product.quantity > 0,
    maxStock: product.quantity,
    moq: product.moq,
    category: product.category,
    hasVariants: false,
    minVariantPrice: undefined,
    colorVariants: [] as { name: string; hex: string }[],
  };
}

export function mockProductToDetail(product: MockProduct) {
  const images = product.images?.length ? product.images : [product.image];
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description,
    price: product.price,
    compare_at_price: product.compare_at_price,
    images,
    category: product.category,
    rating: product.rating_avg,
    rating_avg: product.rating_avg,
    reviewCount: 0,
    stockCount: product.quantity,
    quantity: product.quantity,
    moq: product.moq,
    colors: [] as string[],
    colorHexMap: {} as Record<string, string>,
    variants: [] as unknown[],
    sizes: [] as string[],
    features: ['Premium quality', 'Curated boutique piece'],
    featured: ['Premium quality', 'Curated boutique piece'],
    care: 'Handle with care. Follow garment label instructions.',
    preorderShipping: null,
  };
}

export function getRelatedMockProducts(product: MockProduct, limit = 4) {
  return MOCK_PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit)
    .map(mockProductToCard);
}

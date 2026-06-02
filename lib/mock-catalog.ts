/**
 * Homepage display mockups — replace `image` paths when assets are ready.
 * Suggested files under /public/products/ and /public/categories/
 */

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

export const MOCK_FEATURED_PRODUCTS = [
  {
    id: 'mock-elena-ruched-midi',
    slug: 'elena-ruched-midi-dress',
    name: 'Elena Ruched Midi Dress',
    category: 'Dresses',
    price: 189,
    originalPrice: 229,
    image: '/products/elena-ruched-midi-dress.jpg?v=2',
    tagline: 'Pleated texture · side ruching · waist tie belt',
  },
  {
    id: 'mock-milan-lounge-set',
    slug: 'milan-lounge-co-ord-set',
    name: 'Milan Lounge Co Ord Set',
    category: 'Two Piece Sets',
    price: 165,
    originalPrice: 195,
    image: '/products/milan-lounge-co-ord-set.jpg?v=2',
    tagline: 'Floral crop top · tiered mini skirt · smocked waist',
  },
  {
    id: 'mock-mocha-milkmaid-top',
    slug: 'mocha-milkmaid-square-neck-top',
    name: 'Mocha Milkmaid Square Neck Top',
    category: 'Tops',
    price: 95,
    image: '/products/mocha-milkmaid-square-neck-top.jpg?v=1',
    tagline: 'Square neckline · bishop sleeves · side zip',
  },
  {
    id: 'mock-bella-ribbed-top',
    slug: 'bella-ribbed-halter-neck-top',
    name: 'Bella Ribbed Halter Neck Top',
    category: 'Tops',
    price: 79,
    image: '/products/bella-ribbed-halter-neck-top.jpg?v=1',
    tagline: 'Ribbed knit · collared halter · heart buttons',
  },
  {
    id: 'mock-sofia-satin-slip',
    slug: 'sofia-satin-slip-dress',
    name: 'Sofia Satin Slip Dress',
    category: 'New Arrivals',
    price: 199,
    originalPrice: 249,
    image: '/products/sofia-satin-slip-dress.jpg?v=1',
    tagline: 'Satin finish · floral print · spaghetti straps',
  },
] as const;

-- Categories for perfume CSV import (product-creator matches category by name, case-insensitive).
INSERT INTO public.categories (name, slug, description, status)
SELECT 'Women''s Fragrances',
       'womens-fragrances',
       'Women''s perfumes and eau de parfum.',
       'active'::public.category_status
WHERE NOT EXISTS (SELECT 1 FROM public.categories WHERE slug = 'womens-fragrances');

INSERT INTO public.categories (name, slug, description, status)
SELECT 'Men''s Fragrances',
       'mens-fragrances',
       'Men''s perfumes and eau de parfum.',
       'active'::public.category_status
WHERE NOT EXISTS (SELECT 1 FROM public.categories WHERE slug = 'mens-fragrances');

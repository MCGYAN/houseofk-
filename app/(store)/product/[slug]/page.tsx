import { SITE_NAME } from '@/lib/site-brand';
import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import { getMockProductBySlug } from '@/lib/mock-catalog';
import ProductDetailClient from './ProductDetailClient';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://example.com';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      const mock = getMockProductBySlug(slug);
      if (!mock) {
        return { title: `Product | ${SITE_NAME}` };
      }
      return {
        title: `${mock.name} | ${SITE_NAME}`,
        description: mock.description.slice(0, 155),
      };
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data: product } = await supabase
      .from('products')
      .select('name, description, price, quantity, slug, product_images(url)')
      .eq('slug', slug)
      .single();

    if (!product) {
      return {
        title: `Product | ${SITE_NAME}`,
        description: `Products at ${SITE_NAME}.`,
      };
    }

    const title = `${product.name} - ${SITE_NAME}`;
    const description = (product.description || `Shop ${product.name} at ${SITE_NAME}.`).slice(0, 155);
    const image = product.product_images?.[0]?.url || `${siteUrl}/opengraph-image`;

    return {
      title,
      description,
      alternates: {
        canonical: `${siteUrl}/product/${product.slug}`,
      },
      openGraph: {
        title,
        description,
        type: 'website',
        images: [{ url: image }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
      },
    };
  } catch {
    return {};
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}

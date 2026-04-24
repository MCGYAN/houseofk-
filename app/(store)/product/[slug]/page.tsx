import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import ProductDetailClient from './ProductDetailClient';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://example.com';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return {};
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data: product } = await supabase
      .from('products')
      .select('name, description, price, quantity, slug, product_images(url)')
      .eq('slug', slug)
      .single();

    if (!product) {
      return {
        title: 'Product | House of Elle',
        description: 'Premium fashion and lifestyle essentials by House of Elle.',
      };
    }

    const title = `${product.name} - House of Elle`;
    const description = (product.description || `Shop ${product.name} at House of Elle, Accra.`).slice(0, 155);
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

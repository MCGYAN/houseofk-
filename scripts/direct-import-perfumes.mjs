/**
 * Directly inserts all perfume products into Supabase (products table + product_images + storage).
 * No CSV/ZIP needed — runs against the live database.
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const dotenvPath = path.join(root, '.env.local');
const envLines = fs.readFileSync(dotenvPath, 'utf8').split('\n');
const env = {};
for (const line of envLines) {
  const m = line.match(/^([A-Z_]+)=(.+)$/);
  if (m) env[m[1]] = m[2].trim();
}

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const BUCKET = 'products';

const HER_ID = '27c9f8af-ec4c-429b-a11b-44fcc72e6018';
const HIM_ID = '62b58bf9-8d1b-4b82-ae38-d7faa9153810';
const GIFT_ID = '7474825d-55b5-4078-927e-71c5b42ff644';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function sku() {
  const ts = Date.now().toString(36).toUpperCase().slice(-4);
  const r = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `SLI-${ts}-${r}`;
}

const ALL_PRODUCTS = [
  // ── Batch 1 (01–10) ──
  { name: 'Lattafa Mayar Cherry Intense', cat: HER_ID, batch: 1, img: '01.png' },
  { name: 'Armaf Club de Nuit Maleka', cat: HER_ID, batch: 1, img: '02.png' },
  { name: 'Armaf Club de Nuit Precieux IV', cat: HIM_ID, batch: 1, img: '03.png' },
  { name: 'Lattafa Yara Candy', cat: HER_ID, batch: 1, img: '04.png' },
  { name: 'Lattafa Petra', cat: HER_ID, batch: 1, img: '05.png' },
  { name: 'Maison Asrar Vanilla Seduction', cat: HER_ID, batch: 1, img: '06.png' },
  { name: 'Armaf Club de Nuit Intense Man', cat: HIM_ID, batch: 1, img: '07.png' },
  { name: 'Rasasi Hawas Black for Him', cat: HIM_ID, batch: 1, img: '08.png' },
  { name: 'Afnan 9 PM Rebel', cat: HIM_ID, batch: 1, img: '09.png' },
  { name: 'Afnan 9 PM', cat: HIM_ID, batch: 1, img: '10.png' },

  // ── Batch 2 (01–09) ──
  { name: "Lattafa Bade'e Al Oud Sublime", cat: HIM_ID, batch: 2, img: '01.png' },
  { name: 'Lattafa Hayaati Florence', cat: HER_ID, batch: 2, img: '02.png' },
  { name: 'Asdaaf Andaleeb', cat: HER_ID, batch: 2, img: '03.png' },
  { name: 'Lattafa Asad Bourbon', cat: HIM_ID, batch: 2, img: '04.png' },
  { name: 'Rave Now Women', cat: HER_ID, batch: 2, img: '05.png' },
  { name: 'Hugo Boss Boss Femme', cat: HER_ID, batch: 2, img: '06.png' },
  { name: 'Maison Alhambra Athena', cat: HER_ID, batch: 2, img: '07.png' },
  { name: 'Lattafa Angham', cat: HER_ID, batch: 2, img: '08.png' },
  { name: 'Amaran Sugar Oxana', cat: HER_ID, batch: 2, img: '09.png' },

  // ── Batch 3 (01–33) ──
  { name: 'Lattafa Eclaire', cat: HER_ID, batch: 3, img: '01.png' },
  { name: "L'Affair Tofy Milky Vanilla", cat: HER_ID, batch: 3, img: '02.png' },
  { name: 'Ameerat Al Arab', cat: HER_ID, batch: 3, img: '03.png' },
  { name: 'Lattafa Tharwah Gold', cat: HER_ID, batch: 3, img: '04.png' },
  { name: 'Lattafa Victoria', cat: HER_ID, batch: 3, img: '05.png' },
  { name: 'Montera Instant Love', cat: HER_ID, batch: 3, img: '06.png' },
  { name: 'Maison Alhambra Exclusif Oud', cat: HIM_ID, batch: 3, img: '07.png' },
  { name: "L'Affair Pure Spirit", cat: HIM_ID, batch: 3, img: '08.png' },
  { name: 'Maison Alhambra Exclusif Rose', cat: HIM_ID, batch: 3, img: '09.png' },
  { name: 'French Avenue Liquid Brun', cat: HIM_ID, batch: 3, img: '10.png' },
  { name: 'Lattafa Khamrah', cat: HIM_ID, batch: 3, img: '11.png' },
  { name: "Afnan Supremacy Collector's Edition", cat: HIM_ID, batch: 3, img: '12.png' },
  { name: 'Fragrance World Elysia Vanilla Sugar', cat: HER_ID, batch: 3, img: '13.png' },
  { name: 'Asdaaf Ameerat Al Arab Prive Rose', cat: HER_ID, batch: 3, img: '14.png' },
  { name: 'Al Haramain Amber Oud', cat: HIM_ID, batch: 3, img: '15.png' },
  { name: 'Khadlaj Infini', cat: HIM_ID, batch: 3, img: '17.png' },
  { name: 'Fragrance World Brown Orchid Rose Edition Gift Set', cat: GIFT_ID, batch: 3, img: '18.png' },
  { name: 'Rave Now', cat: HIM_ID, batch: 3, img: '19.png' },
  { name: 'Khadlaj Oud Noir', cat: HIM_ID, batch: 3, img: '20.png' },
  { name: 'Armaf Club de Nuit Women', cat: HER_ID, batch: 3, img: '21.png' },
  { name: 'Lattafa Khamrah Dukhan', cat: HIM_ID, batch: 3, img: '22.png' },
  { name: 'Lattafa Mayar', cat: HER_ID, batch: 3, img: '24.png' },
  { name: 'Invicto Absolu', cat: HIM_ID, batch: 3, img: '25.png' },
  { name: 'Armaf Club de Nuit Precieux I', cat: HIM_ID, batch: 3, img: '26.png' },
  { name: 'Intense Noir Le Parfum', cat: HIM_ID, batch: 3, img: '27.png' },
  { name: 'Lattafa Hayaati', cat: HIM_ID, batch: 3, img: '28.png' },
  { name: 'Armaf Club de Nuit Intense Man Limited Edition Gift Set', cat: GIFT_ID, batch: 3, img: '29.png' },
  { name: 'Khadlaj Island Vanilla Dunes', cat: HER_ID, batch: 3, img: '30.png' },
  { name: 'Verato White Musk', cat: HER_ID, batch: 3, img: '31.png' },
  { name: 'Le Falcone Bonita Pour Femme', cat: HER_ID, batch: 3, img: '32.png' },
  { name: 'Fragrance World Elysia Marshmallow', cat: HER_ID, batch: 3, img: '33.png' },
];

async function ensureUniqueSlug(baseSlug) {
  let slug = baseSlug;
  let n = 1;
  while (true) {
    const { data } = await supabase.from('products').select('id').eq('slug', slug).maybeSingle();
    if (!data) return slug;
    slug = `${baseSlug}-${n}`;
    n++;
  }
}

async function main() {
  const batchDirs = {
    1: path.join(root, 'data', 'imports', 'perfume-batch-01', 'images'),
    2: path.join(root, 'data', 'imports', 'perfume-batch-02', 'images'),
    3: path.join(root, 'data', 'imports', 'perfume-batch-03', 'images'),
  };

  for (const [b, dir] of Object.entries(batchDirs)) {
    if (!fs.existsSync(dir)) {
      console.error(`Missing images dir for batch ${b}: ${dir}`);
      process.exit(1);
    }
  }

  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (const p of ALL_PRODUCTS) {
    const nameKey = p.name.trim().toLowerCase();
    const { data: existing } = await supabase
      .from('products')
      .select('id')
      .ilike('name', nameKey)
      .maybeSingle();

    if (existing) {
      console.log(`SKIP (exists): ${p.name}`);
      skipped++;
      continue;
    }

    const imgPath = path.join(batchDirs[p.batch], p.img);
    if (!fs.existsSync(imgPath)) {
      console.error(`MISS image: ${imgPath}`);
      errors++;
      continue;
    }

    const imgBuf = fs.readFileSync(imgPath);
    const storagePath = `imports/batch${p.batch}/${p.img}`;

    const { error: uploadErr } = await supabase.storage
      .from(BUCKET)
      .upload(storagePath, imgBuf, { contentType: 'image/png', upsert: true });

    if (uploadErr) {
      console.error(`UPLOAD FAIL ${p.name}: ${uploadErr.message}`);
      errors++;
      continue;
    }

    const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(storagePath);

    const baseSlug = slugify(p.name) || 'product';
    const slug = await ensureUniqueSlug(baseSlug);

    const { data: inserted, error: insertErr } = await supabase
      .from('products')
      .insert({
        name: p.name,
        slug,
        sku: sku(),
        description: 'Eau de parfum. Set your selling price and final copy in admin.',
        price: 0,
        quantity: 100,
        moq: 1,
        status: 'draft',
        featured: false,
        category_id: p.cat,
        metadata: { low_stock_threshold: 5 },
      })
      .select('id')
      .single();

    if (insertErr) {
      console.error(`INSERT FAIL ${p.name}: ${insertErr.message}`);
      errors++;
      continue;
    }

    await supabase.from('product_images').insert({
      product_id: inserted.id,
      url: publicUrl,
      alt_text: p.name,
      position: 0,
    });

    console.log(`OK: ${p.name}`);
    created++;
  }

  console.log(`\nDone. Created: ${created} | Skipped: ${skipped} | Errors: ${errors}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

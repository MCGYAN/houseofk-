/**
 * Writes data/imports/perfume-batch-03/products.csv (33 rows).
 * Row order matches image slot 01.png … 33.png (user upload order from chat).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'data', 'imports', 'perfume-batch-03');
const outCsv = path.join(outDir, 'products.csv');

const header =
  'name,description,category,price,compare_at_price,quantity,moq,status,featured,seo_title,seo_description,keywords,low_stock_threshold,preorder_shipping,images,variant_color,variant_color_hex,variant_size,variant_price,variant_stock';

const descGeneric =
  'Imported from photo batch 3. Title was not auto-read for this image — open the photo and set the correct product name in admin.';
const descKnown =
  'Eau de parfum (or concentration shown on pack). Name and imagery from supplier packaging. Set your selling price and final copy in admin.';

/** @type {{ name: string; category: string; keywords: string; desc?: string }[]} */
const rows = [];

for (let i = 1; i <= 17; i++) {
  const n = String(i).padStart(2, '0');
  rows.push({
    name: `New arrival (rename from photo) ${n}`,
    category: "Women's Fragrances",
    keywords: `batch-3,photo-${n}`,
    desc: descGeneric,
  });
}

const known = [
  { name: 'Fragrance World Brown Orchid Rose Edition Gift Set', category: "Women's Fragrances", keywords: 'Fragrance World,Brown Orchid,Rose Edition' },
  { name: 'Rave Now', category: "Men's Fragrances", keywords: 'Rave,Now' },
  { name: 'Khadlaj Oud Noir', category: "Men's Fragrances", keywords: 'Khadlaj,Oud Noir' },
  { name: 'Armaf Club de Nuit Women', category: "Women's Fragrances", keywords: 'Armaf,Club de Nuit,Women' },
  { name: 'Lattafa Khamrah Dukhan', category: "Men's Fragrances", keywords: 'Lattafa,Khamrah,Dukhan' },
  { name: 'Lattafa Yara Candy (batch 3)', category: "Women's Fragrances", keywords: 'Lattafa,Yara,Candy' },
  { name: 'Lattafa Mayar', category: "Women's Fragrances", keywords: 'Lattafa,Mayar' },
  { name: 'Invicto Absolu', category: "Men's Fragrances", keywords: 'Invicto,Absolu' },
  { name: 'Armaf Club de Nuit Precieux I', category: "Men's Fragrances", keywords: 'Armaf,Club de Nuit,Precieux I' },
  { name: 'Intense Noir Le Parfum', category: "Men's Fragrances", keywords: 'Intense Noir,Le Parfum' },
  { name: 'Lattafa Hayaati', category: "Men's Fragrances", keywords: 'Lattafa,Hayaati' },
  {
    name: 'Armaf Club de Nuit Intense Man Limited Edition Parfum Gift Set',
    category: "Men's Fragrances",
    keywords: 'Armaf,Club de Nuit,Intense Man,Limited Edition',
  },
  { name: 'Khadlaj Island Vanilla Dunes', category: "Women's Fragrances", keywords: 'Khadlaj,Island,Vanilla Dunes' },
  { name: 'Verato White Musk', category: "Women's Fragrances", keywords: 'Verato,White Musk' },
  { name: 'Bonita Pour Femme', category: "Women's Fragrances", keywords: 'Bonita,Pour Femme' },
  { name: 'Fragrance World ELYSIA MARSHMALLOW', category: "Women's Fragrances", keywords: 'Fragrance World,ELYSIA,Marshmallow' },
];

for (const k of known) {
  rows.push({ ...k, desc: descKnown });
}

function esc(s) {
  return `"${String(s).replace(/"/g, '""')}"`;
}

const lines = [header];
let img = 1;
for (const r of rows) {
  const n = String(img++).padStart(2, '0');
  lines.push(
    [
      esc(r.name),
      esc(r.desc ?? descKnown),
      esc(r.category),
      '0',
      '',
      '100',
      '1',
      'draft',
      'false',
      '',
      '',
      esc(r.keywords),
      '5',
      '',
      `${n}.png`,
      '',
      '',
      '',
      '',
      '',
    ].join(',')
  );
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outCsv, lines.join('\n') + '\n', 'utf8');
console.log('Wrote', outCsv, `(${rows.length} rows)`);

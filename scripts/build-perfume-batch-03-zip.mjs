/**
 * Builds data/imports/perfume-batch-03/perfume-batch-03-import.zip (33 images + products.csv).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import JSZip from 'jszip';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const batchDir = path.join(root, 'data', 'imports', 'perfume-batch-03');
const imgDir = path.join(batchDir, 'images');
const csvPath = path.join(batchDir, 'products.csv');
const outZip = path.join(batchDir, 'perfume-batch-03-import.zip');

const EXPECTED = Array.from({ length: 33 }, (_, i) => `${String(i + 1).padStart(2, '0')}.png`);

async function main() {
  if (!fs.existsSync(csvPath)) {
    console.error('Run: node scripts/generate-perfume-batch-03-csv.mjs');
    process.exit(1);
  }
  const missing = EXPECTED.filter((name) => !fs.existsSync(path.join(imgDir, name)));
  if (missing.length) {
    console.error('Missing images:', missing.slice(0, 5).join(', '), missing.length > 5 ? `… (+${missing.length - 5})` : '');
    process.exit(1);
  }

  const zip = new JSZip();
  zip.file('products.csv', fs.readFileSync(csvPath, 'utf8'));
  for (const name of EXPECTED) {
    zip.file(name, fs.readFileSync(path.join(imgDir, name)));
  }
  fs.writeFileSync(outZip, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
  console.log('Wrote', outZip);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

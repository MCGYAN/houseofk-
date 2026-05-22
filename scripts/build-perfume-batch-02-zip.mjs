/**
 * Builds data/imports/perfume-batch-02/perfume-batch-02-import.zip for Admin > Products > ZIP import.
 * Requires data/imports/perfume-batch-02/images/01.png … 09.png (see IMAGE_ORDER.txt).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import JSZip from 'jszip';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const batchDir = path.join(root, 'data', 'imports', 'perfume-batch-02');
const imgDir = path.join(batchDir, 'images');
const csvPath = path.join(batchDir, 'products.csv');
const outZip = path.join(batchDir, 'perfume-batch-02-import.zip');

const EXPECTED = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '08.png', '09.png'];

async function main() {
  if (!fs.existsSync(csvPath)) {
    console.error('Missing CSV:', csvPath);
    process.exit(1);
  }
  if (!fs.existsSync(imgDir)) {
    console.error('Missing images dir:', imgDir);
    process.exit(1);
  }

  const missing = EXPECTED.filter((name) => !fs.existsSync(path.join(imgDir, name)));
  if (missing.length) {
    console.error('Missing image files (see data/imports/perfume-batch-02/IMAGE_ORDER.txt):');
    for (const m of missing) console.error(' ', m);
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

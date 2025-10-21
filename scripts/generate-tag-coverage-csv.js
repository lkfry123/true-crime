// Generate a simple CSV of site URLs for GTM Tag Coverage upload/checks
// Columns: url,container_id,measurement_id,expected,notes

import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://edgein.netlify.app';
const CONTAINER = 'GTM-WXH45CQN';
const MEASUREMENT = 'G-G6BV4CR368';

const staticUrls = [
  '/',
  '/blog/',
  '/tags/ed-gein/',
  '/sitemap/',
  '/sitemap.xml',
  '/gtm-test.html',
];

function collectPostUrls() {
  const postsDir = path.resolve(process.cwd(), 'src/content/posts');
  const urls = [];
  if (!fs.existsSync(postsDir)) return urls;
  for (const file of fs.readdirSync(postsDir)) {
    if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const slug = file.replace(/\.(md|mdx)$/i, '');
      urls.push(`/blog/${slug}/`);
    }
  }
  return urls;
}

function main() {
  const rows = [['url','container_id','measurement_id','expected','notes']];
  const urls = [
    ...staticUrls,
    ...collectPostUrls()
  ];
  for (const u of urls) {
    rows.push([
      `${SITE}${u}`,
      CONTAINER,
      MEASUREMENT,
      'google_tag (GA4 via GTM)',
      'Expect GTM on-page snippet and GA4 via GTM'
    ]);
  }
  const outDir = path.resolve(process.cwd(), 'tag-coverage');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'tag_coverage.csv');
  const csv = rows.map(r => r.map(v => `"${String(v).replaceAll('"','""')}"`).join(',')).join('\n');
  fs.writeFileSync(outPath, csv, 'utf8');
  console.log(`Wrote ${outPath}`);
}

main();



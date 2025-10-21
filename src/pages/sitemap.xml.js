import { getCollection } from 'astro:content';

export async function GET() {
  const site = 'https://edgein.netlify.app';
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => (a.data.date < b.data.date ? 1 : -1));

  const urls = [
    `${site}/`,
    `${site}/blog/`,
    ...posts.map((p) => `${site}/blog/${p.slug}/`),
    `${site}/tags/ed-gein/`,
    `${site}/sitemap/`
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}



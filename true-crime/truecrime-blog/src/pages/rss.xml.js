import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
  return rss({
    title: 'True Crime',
    description: 'True crime stories and analysis',
    site: context.site || 'https://example.com',
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date)
    }))
  });
}



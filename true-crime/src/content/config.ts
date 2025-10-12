import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(), // ISO date string
    tags: z.array(z.string()).default([]),
    hero: z.string().optional(),      // path to hero image
    canonical: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().optional()
  })
});

export const collections = { posts };



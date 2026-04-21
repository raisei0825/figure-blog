import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// blog コレクションは microCMS に移行済み

const rankingCollection = defineCollection({
  loader: glob({ base: './src/content/ranking', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    period: z.string(),
    category: z.string().optional(),
  }),
});

const featureCollection = defineCollection({
  loader: glob({ base: './src/content/feature', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  ranking: rankingCollection,
  feature: featureCollection,
};

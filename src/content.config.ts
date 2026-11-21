import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // One- or two-sentence direct answer shown at the top of the page. Search
    // engines and AI assistants quote this, so keep it self-contained.
    answer: z.string(),
    practiceArea: z.string(),
    reviewer: z.string().optional(), // advocate slug from site.config.ts
    published: z.coerce.date(),
    updated: z.coerce.date(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { guides };

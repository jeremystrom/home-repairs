import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const findings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/findings' }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      category: z.enum(['self', 'handyman', 'dismissed']),
      severity: z.enum(['repairs-recommended', 'attention', 'preventive']),
      location: z.string(),
      pages: z.string(),
      photos: z
        .array(
          z.object({
            src: image(),
            caption: z.string().optional(),
          }),
        )
        .default([]),
      bundleId: z.string().optional(),
      inspectorQuote: z.string(),
      status: z.enum(['todo', 'in-progress', 'done']).default('todo'),
      order: z.number(),
    }),
});

export const collections = { findings };

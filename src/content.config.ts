// https://docs.astro.build/en/guides/content-collections/
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imagePath: z.array(z.string()),
    previewImagePath: z.string(),
    typology: z.string(),
    location: z.string().optional(),
    year: z.string(),
    surface: z.string(),
    keywords: z.string(),
  }),
});

export const collections = { projects };

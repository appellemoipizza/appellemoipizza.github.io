import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['note', 'essay', 'film', 'log']),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    author: z.string().default('thomas vezzani'),
    project: z.string().optional(),
    image: z.string().optional(),
    youtube: z.string().url().optional(),
    tags: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    status: z.string(),
    role: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    repo: z.string().url().optional(),
    url: z.string().url().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { notes, projects };

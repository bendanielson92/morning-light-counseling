import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faqSchema = z.array(
  z.object({
    question: z.string(),
    answer: z.string(),
  })
);

const services = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string(),
    summary: z.string(),
    metaDescription: z.string(),
    order: z.number().default(10),
    faqs: faqSchema.default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, posts };

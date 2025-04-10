// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/blog"
    }),
    schema: z.object({
        title: z.string(),
        canonicalSlug: z.string(),
        imageURL: z.string().optional()
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
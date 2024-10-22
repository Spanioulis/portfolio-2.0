// src/content/config.ts

import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		link: z.string().url(),
		img: z.string(),
	}),
});

export const collections = { projects };

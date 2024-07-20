import {z} from 'zod';

export const Ingredient = z.object({
    name: z.string(),
    quantity: z.number(),
    unit: z.string(),
});

export const Step = z.object({
    step: z.number(),
    description: z.string(),
    image: z.string().nullish(),
});

export const Recipe = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  language: z.string(),
  ingredients: z.array(Ingredient),
  ingredients_image_url: z.string().nullish(),
  equipment: z.array(z.string()).nullish(),
  instructions: z.array(Step),
  rating: z.number(),
  thumbnail_url: z.string(),
  image_url: z.string(),
  author_id: z.string(),
});
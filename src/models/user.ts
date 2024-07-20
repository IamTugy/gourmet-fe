import {z} from 'zod';

export const User = z.object({
  id: z.string(),
  name: z.string(),
  hashtag: z.string(),
  image_url: z.string().nullish(),
});
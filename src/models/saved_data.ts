import { z } from "zod";

export const IngredientOption = z.object({
  id: z.string(),
  name: z.object({
    hebrew: z.string().nullish(),
    english: z.string(),
  }),
});

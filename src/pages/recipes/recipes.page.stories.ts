import type { Meta, StoryObj } from "@storybook/react";

import { Recipes } from "./recipes.page";

export default {
  title: "pages/recipes",
  component: Recipes,
  tags: ["autodocs"],
} satisfies Meta<typeof Recipes>;

export const Default: StoryObj<typeof Recipes> = {
} satisfies StoryObj<typeof Recipes>;
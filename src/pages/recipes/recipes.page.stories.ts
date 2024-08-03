import type { Meta, StoryObj } from "@storybook/react";

import { Recipes } from "./recipes.page";
import { withRouter } from "~/utils/storybook-router";

export default {
  title: "pages/recipes",
  decorators: [withRouter(["/recipes/"])],
  component: Recipes,
  tags: ["autodocs"],
} satisfies Meta<typeof Recipes>;

export const Default: StoryObj<typeof Recipes> = {} satisfies StoryObj<
  typeof Recipes
>;

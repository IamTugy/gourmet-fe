import type { Meta, StoryObj } from "@storybook/react";

import { RecipeViewer } from "./recipe-viewer.page";
import { withRouter } from "~/utils/storybook-router";

export default {
  title: "pages/recipe-viewer",
  component: RecipeViewer,
  decorators: [
    withRouter
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof RecipeViewer>;

export const Default: StoryObj<typeof RecipeViewer> = {} satisfies StoryObj<
  typeof RecipeViewer
>;

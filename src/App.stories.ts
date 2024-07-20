import type { Meta, StoryObj } from "@storybook/react";

import { App } from "./App";

export default {
  title: "main-app",
  component: App,
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export const Default: StoryObj<typeof App> = {
} satisfies StoryObj<typeof App>;
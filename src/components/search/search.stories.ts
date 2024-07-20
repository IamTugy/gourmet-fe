import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "./search";

export default {
  title: "components/search",
  component: Search,
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export const Default: StoryObj<typeof Search> = {} satisfies StoryObj<
  typeof Search
>;

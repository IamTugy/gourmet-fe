import type { Meta, StoryObj, StoryFn } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  title: "components/loader",
  component: Loader,
  decorators: [
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export const Default: StoryFn<typeof Loader> = (args) => <div style={{width: "50px", height: "50px"}}><Loader {...args} /></div>; 

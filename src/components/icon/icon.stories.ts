import { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./icon";

export default { component: Icon, title: "components/Icon" } satisfies Meta<
  typeof Icon
>;

export const Default = { args: { iconName: "home" } } satisfies StoryObj<
  typeof Icon
>;

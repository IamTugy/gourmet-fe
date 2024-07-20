import type { Preview } from "@storybook/react";
import "../src/tailwind.css";
import { withRouter } from "./tanstack-router";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    decorators: [
      withRouter
    ],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
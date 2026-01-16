import { themeClass } from "../src/app/styles/theme.css";

import type { Preview } from "@storybook/react-vite";
import "@/app/styles/global.css.ts";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={themeClass}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  parameters: {
    layout: "padded",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

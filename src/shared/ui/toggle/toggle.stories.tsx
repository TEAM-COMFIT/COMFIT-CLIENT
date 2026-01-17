import { useState } from "react";

import { Toggle } from "./toggle";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "Toggle switch component",
  },
  argTypes: {
    checked: {
      control: false,
      table: { disable: true },
    },
    disabled: {
      control: false,
      table: { disable: true },
    },
    onCheckedChange: {
      action: "checked change",
      description: "Fires when the value changes.",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

type ToggleArgs = Parameters<typeof Toggle>[0];

const ToggleStory = ({ checked, onCheckedChange, ...restArgs }: ToggleArgs) => {
  const [isOn, setIsOn] = useState(checked);

  return (
    <Toggle
      {...restArgs}
      aria-label="Toggle"
      checked={isOn}
      onCheckedChange={(nextChecked) => {
        setIsOn(nextChecked);
        onCheckedChange?.(nextChecked);
      }}
    />
  );
};

export const Off: Story = {
  args: {
    checked: false,
  },
  render: (args) => <ToggleStory {...args} />,
};

export const On: Story = {
  args: {
    checked: true,
  },
  render: (args) => <ToggleStory {...args} />,
};

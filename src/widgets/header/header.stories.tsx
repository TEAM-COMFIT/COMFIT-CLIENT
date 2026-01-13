import { useEffect } from "react";
import { MemoryRouter } from "react-router-dom";

import { useAuthStore } from "@/app/store";

import { Header } from "./header";

import type { Meta, StoryObj } from "@storybook/react-vite";

type StoryProps = React.ComponentProps<typeof Header> & {
  isLoggedIn: boolean;
};

const meta = {
  title: "Shared/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "로그인 상태에 따라 UI가 변경되는 헤더",
  },
  decorators: [
    (Story, context) => {
      const { isLoggedIn } = context.args as StoryProps;

      useEffect(() => {
        useAuthStore.setState({ isLoggedIn });
        return () => useAuthStore.setState({ isLoggedIn: false });
      }, [isLoggedIn]);

      return (
        <MemoryRouter>
          <div style={{ width: "106rem" }}>
            <Story />
          </div>
        </MemoryRouter>
      );
    },
  ],
  argTypes: {
    isLoggedIn: {
      control: "boolean",
      description: "로그인 여부",
    },
  },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

// === Stories ===

export const LoggedOut: Story = {
  args: {
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
};

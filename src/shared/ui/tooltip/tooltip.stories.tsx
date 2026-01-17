import { Tooltip } from "./tooltip";
import { HELP_TOOLTIP_CONTENT, GUIDE_TOOLTIP_CONTENT } from "./tooltip.content";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "도움말 / 작성 가이드용 툴팁 컴포넌트",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["help", "guide"],
      description: "툴팁 타입 (아이콘 및 스타일 결정)",
    },
    label: {
      control: "text",
      description: "트리거 영역에 표시되는 라벨",
    },
    children: {
      control: false,
      description: "툴팁 내부 콘텐츠",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginBottom: "4rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

/* =========================
 * Stories
 * ========================= */

export const Help: Story = {
  args: {
    type: "help",
    label: "도움말",
    children: HELP_TOOLTIP_CONTENT,
  },
};

export const Guide: Story = {
  args: {
    type: "guide",
    label: "작성 가이드",
    children: GUIDE_TOOLTIP_CONTENT,
  },
};

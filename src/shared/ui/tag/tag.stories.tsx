import { Tag } from "./tag";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "태그 컴포넌트",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["label", "xlabel", "register"],
      description: "태그 타입",
    },
    children: {
      control: "text",
      description: "태그 내부 텍스트",
    },
    onCancel: {
      action: "cancel clicked",
      description: "xlabel 타입에서 취소 버튼 클릭 시 호출",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "2rem",
          display: "flex",
          gap: "1.2rem",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

/* =========================
 * Stories
 * ========================= */

export const Primary: Story = {
  args: {
    type: "primary",
    children: "기본 태그",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "보조 태그",
  },
};

export const XLabel: Story = {
  args: {
    xlabel: true,
    children: "삭제 가능 태그",
  },
};

export const Register: Story = {
  args: {
    type: "register",
    children: "인턴/실무",
  },
};

export const MultipleTags: Story = {
  render: () => (
    <>
      <Tag type="primary">Frontend</Tag>
      <Tag type="secondary">Backend</Tag>
      <Tag xlabel onCancel={() => console.log("cancel AI")}>
        AI
      </Tag>
      <Tag type="register">인턴/실무</Tag>
    </>
  ),
};

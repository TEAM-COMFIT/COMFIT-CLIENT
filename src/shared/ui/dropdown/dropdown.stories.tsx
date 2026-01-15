import Dropdown from "./dropdown";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Trigger / Menu / Item 합성 컴포넌트 기반 드롭다운",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["medium", "large", "full"],
      description: "드롭다운 메뉴 크기 타입",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "4rem", width: "40rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

/* =========================
 * Stories
 * ========================= */

export const Medium: Story = {
  args: {
    type: "medium",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>옵션 선택</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>옵션 1</Dropdown.Item>
        <Dropdown.Item>옵션 2</Dropdown.Item>
        <Dropdown.Item>옵션 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};

export const Large: Story = {
  args: {
    type: "large",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>정렬 기준</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>최신순</Dropdown.Item>
        <Dropdown.Item>오래된순</Dropdown.Item>
        <Dropdown.Item>조회수순</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};

export const FullWidth: Story = {
  args: {
    type: "full",
  },
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>카테고리</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>전체</Dropdown.Item>
        <Dropdown.Item>프론트엔드</Dropdown.Item>
        <Dropdown.Item>백엔드</Dropdown.Item>
        <Dropdown.Item>AI</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};

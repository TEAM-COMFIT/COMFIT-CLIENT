import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "Primary, Secondary 버튼 컴포넌트",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
      description: "버튼의 스타일 변형 (Primary: 솔리드, Secondary: 아웃라인)",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large", "full"],
      description: "버튼의 크기",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
    children: {
      control: "text",
      description: "버튼 내부 텍스트 또는 요소",
    },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 기본 스토리 (Primary)
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Primary Button",
  },
};

// 2. Secondary 스토리
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "large",
    children: "Secondary Button",
  },
};

// 3. 비활성화 상태 (Disabled)
export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled",
  },
};

// 4. 모든 사이즈 한눈에 보기 (Grid 형태)
export const AllSizes: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button {...args} size="small">
          Small
        </Button>
        <Button {...args} size="medium">
          Medium
        </Button>
        <Button {...args} size="large">
          Large
        </Button>
      </div>
      <div
        style={{ width: "34rem", border: "1px dashed #ddd", padding: "1rem" }}
      >
        {/* Full 사이즈는 컨테이너 너비를 확인하기 위해 박스 안에 배치 */}
        <Button {...args} size="full">
          Full Width Button
        </Button>
      </div>
    </div>
  ),
  args: {
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Small, Medium, Large, Full 사이즈를 한눈에 비교합니다.",
      },
    },
  },
};

// 5. 디자인 시스템 비교 (Primary vs Secondary)
export const DesignSystemComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "4rem" }}>
      {/* Primary Column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>Primary</h3>
        <Button variant="primary" size="full">
          Full
        </Button>
        <Button variant="primary" size="large">
          Large
        </Button>
        <Button variant="primary" size="medium">
          Medium
        </Button>
        <Button variant="primary" size="small">
          Small
        </Button>
        <Button variant="primary" size="medium" disabled>
          Disabled
        </Button>
      </div>

      {/* Secondary Column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>Secondary</h3>
        <Button variant="secondary" size="full">
          Full
        </Button>
        <Button variant="secondary" size="large">
          Large
        </Button>
        <Button variant="secondary" size="medium">
          Medium
        </Button>
        <Button variant="secondary" size="small">
          Small
        </Button>
        <Button variant="secondary" size="medium" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

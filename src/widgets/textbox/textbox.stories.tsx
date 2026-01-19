import { Textbox } from "./textbox";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Textbox",
  component: Textbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "Text container for short or long content blocks.",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["medium", "large"],
      description: "Padding preset for the textbox.",
    },
    children: {
      control: "text",
      description: "Textbox content.",
    },
  },
  args: {
    type: "medium",
    children:
      "콘텐츠 IP를 기반으로 방송/디지털/글로벌 플랫폼까지 확장하며, 장기적인 IP 가치와 브랜드 일관성을 중시하는 엔터테인먼트 기업",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "48rem", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    type: "medium",
  },
};

export const Large: Story = {
  args: {
    type: "large",
    children:
      "자율적으로 문제를 정의하고, 다양한 이해관계와 협업하며, 결과에 대한 책임을 지는 사람",
  },
};

export const WithParagraphs: Story = {
  render: (args) => (
    <Textbox {...args}>
      <p>
        콘텐츠 IP를 기반으로 방송/디지털/글로벌 플랫폼까지 확장하며, 장기적인 IP
        가치와 브랜드 일관성을 중시하는 엔터테인먼트 기업
      </p>
      <p>
        자율적으로 문제를 정의하고, 다양한 이해관계와 협업하며, 결과에 대한
        책임을 지는 사람
      </p>
    </Textbox>
  ),
  args: {
    type: "medium",
  },
};

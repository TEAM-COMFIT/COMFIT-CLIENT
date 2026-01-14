import { Textbox } from "./textbox";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Textbox",
  component: Textbox,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Editable/view textarea with size variants",
  },
  argTypes: {
    mode: {
      control: "radio",
      options: ["edit", "view"],
    },
    type: {
      control: "select",
      options: ["jobDescription", "situation", "task", "result", "action"],
    },
  },
} satisfies Meta<typeof Textbox>;

export default meta;
type Story = StoryObj<typeof Textbox>;

export const Default: Story = {
  args: {
    type: "jobDescription",
    mode: "edit",
    placeholder:
      "ex) 대학생 마케팅 동아리에서 신규 브랜드 인지도를 높이기 위한 프로젝트를 진행함.",
  },
};

export const ViewMode: Story = {
  args: {
    type: "jobDescription",
    mode: "view",
    value:
      "프로젝트를 진행하며 팀원들과 협업했고, 목표 달성을 위해 데이터를 분석했습니다.",
  },
};

export const AllEditTypes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.4rem" }}>
      <Textbox
        type="jobDescription"
        mode="edit"
        placeholder="Job description"
      />
      <Textbox type="situation" mode="edit" placeholder="Situation" />
      <Textbox type="task" mode="edit" placeholder="Task" />
      <Textbox type="result" mode="edit" placeholder="Result" />
      <Textbox type="action" mode="edit" placeholder="Action" />
    </div>
  ),
};

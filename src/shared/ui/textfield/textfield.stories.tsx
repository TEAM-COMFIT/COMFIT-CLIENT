import { useState } from "react";

import { Textfield } from "./textfield";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Textfield",
  component: Textfield,
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
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof Textfield>;

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
      <Textfield
        type="jobDescription"
        mode="edit"
        placeholder="Job description"
      />
      <Textfield type="situation" mode="edit" placeholder="Situation" />
      <Textfield type="task" mode="edit" placeholder="Task" />
      <Textfield type="result" mode="edit" placeholder="Result" />
      <Textfield type="action" mode="edit" placeholder="Action" />
    </div>
  ),
};

const ControlledStory = () => {
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
      <button type="button" onClick={() => setIsEdit((prev) => !prev)}>
        {isEdit ? "Switch to view" : "Switch to edit"}
      </button>
      <Textfield
        type="jobDescription"
        placeholder="자기소개를 입력해주세요."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        mode={isEdit ? "edit" : "view"}
      />
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledStory />,
};

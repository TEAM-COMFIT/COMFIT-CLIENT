import { useState } from "react";

import { Select } from "./select";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Select> = {
  title: "Shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

// 실제 사용 환경처럼 라벨이 바뀌는 예시입니다.
const WithStateExample = () => {
  const [selected, setSelected] = useState("기업 규모를 선택해주세요");

  return (
    <div style={{ height: "300px", width: "90rem" }}>
      <Select>
        <Select.Trigger>{selected}</Select.Trigger>
        <Select.Menu>
          <Select.Item onClick={() => setSelected("대기업")}>
            대기업
          </Select.Item>
          <Select.Item onClick={() => setSelected("스타트업")}>
            스타트업
          </Select.Item>
          <Select.Item onClick={() => setSelected("중견기업")}>
            중견기업
          </Select.Item>
        </Select.Menu>
      </Select>
    </div>
  );
};

export const WithState: Story = {
  render: () => <WithStateExample />,
};

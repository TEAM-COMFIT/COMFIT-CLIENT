import { useState } from "react";

import { Search } from "./search";

import type { SearchSize } from "./search";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Search> = {
  title: "shared/Search",
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

const Playground = () => {
  const [size, setSize] = useState<SearchSize>("full");
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: "2.4rem" }}>
      <div style={{ display: "flex", gap: "0.8rem", marginBottom: "1.2rem" }}>
        <button type="button" onClick={() => setSize("full")}>
          Full
        </button>
        <button type="button" onClick={() => setSize("large")}>
          Large
        </button>
        <button type="button" onClick={() => setSize("medium")}>
          Medium
        </button>
        <button type="button" onClick={() => setSize("small")}>
          Small
        </button>
      </div>

      <Search
        size={size}
        value={value}
        onChange={setValue}
        onSearch={(nextValue: string) => console.log("search:", nextValue)}
        placeholder={size[0].toUpperCase() + size.slice(1)}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <Playground />,
};

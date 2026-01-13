import { useState } from "react";

import { Alert } from "./alert";

import type { AlertVariant } from "./alert.types";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Meta
const meta: Meta<typeof Alert> = {
  title: "shared/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Playground Component
const AlertPlayground = () => {
  const [variant, setVariant] = useState<AlertVariant>("error");
  const [open, setOpen] = useState(true);

  return (
    <div style={{ padding: "2.4rem" }}>
      <div
        style={{
          display: "flex",
          gap: "0.8rem",
          marginBottom: "1.2rem",
        }}
      >
        <button
          onClick={() => {
            setVariant("error");
            setOpen(true);
          }}
        >
          Error
        </button>
        <button
          onClick={() => {
            setVariant("success");
            setOpen(true);
          }}
        >
          Success
        </button>
        <button
          onClick={() => {
            setVariant("warning");
            setOpen(true);
          }}
        >
          Warning
        </button>
        <button
          onClick={() => {
            setVariant("info");
            setOpen(true);
          }}
        >
          Info
        </button>
      </div>

      {open && (
        <Alert
          variant={variant}
          title={variant[0].toUpperCase() + variant.slice(1)}
          description="날짜 형식이 올바르지 않습니다."
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

// Story
export const Playground: Story = {
  render: () => <AlertPlayground />,
};

import { useState, type ReactNode } from "react";

import { Button } from "../button/button";

import { Modal } from "./modal";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: { story: { inline: false, iframeHeight: 600 } },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { table: { disable: true } },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

interface ModalTemplateProps {
  children: ReactNode;
  storyButtonLabel?: string;
}

const ModalTemplate = ({ children, storyButtonLabel }: ModalTemplateProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {/* 값이 없으면 기본값 보여주기 */}
        {storyButtonLabel || "모달 열기"}
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {children}
        </Modal>
      )}
    </>
  );
};

// 1. 타이틀, 서브 타이틀, 확인 버튼 모달
export const Alert: Story = {
  render: () => (
    <ModalTemplate storyButtonLabel="확인 모달 열기">
      <Modal.XButton />
      <Modal.Content>
        <Modal.Title>이 경험을 삭제하시겠습니까?</Modal.Title>
        <Modal.SubTitle>
          작성한 내용은 즉시 제거하며, 복구할 수 없습니다.
        </Modal.SubTitle>
      </Modal.Content>
      <Modal.Buttons>
        <Button variant="secondary" size="large">
          취소
        </Button>
        <Button variant="primary" size="large">
          삭제
        </Button>
      </Modal.Buttons>
    </ModalTemplate>
  ),
};

// 2. 타이틀, 확인 버튼 모달
export const Confirm: Story = {
  render: () => (
    <ModalTemplate storyButtonLabel="확인 모달 열기">
      <Modal.XButton />
      <Modal.Content>
        <Modal.Title>선택한 북마크를 삭제하시겠습니까?</Modal.Title>
      </Modal.Content>
      <Modal.Buttons>
        <Button variant="secondary" size="large">
          취소
        </Button>
        <Button variant="primary" size="large">
          삭제
        </Button>
      </Modal.Buttons>
    </ModalTemplate>
  ),
};

// 3. 이미지형
export const WithImage: Story = {
  render: () => (
    <ModalTemplate storyButtonLabel="이미지 모달 열기">
      <Modal.Content type="auto">
        <Modal.Title>CJ ENM을 선택하셨습니다</Modal.Title>
        <Modal.SubTitle>
          기업 내용 분석 내용을 불러오는 중입니다.
        </Modal.SubTitle>
        <div
          style={{
            width: "200px",
            margin: "0 auto",
          }}
        >
          <Modal.Image />
        </div>
      </Modal.Content>
    </ModalTemplate>
  ),
};

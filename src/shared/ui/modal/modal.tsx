import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import { Load } from "@/shared/assets/images";
import X from "@icons/x.svg?react";

import * as styles from "./modal.css.ts";

interface ModalData {
  onClose: () => void;
}

const modalContext = createContext<ModalData | undefined>(undefined);

const useModalContext = () => {
  const context = useContext(modalContext);
  if (!context) throw new Error("modalContext 내부에서만 사용가능합니다.");
  return context;
};

interface ModalProps {
  children: ReactNode;
  autoPlay?: number;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, autoPlay, isOpen, onClose }: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (autoPlay) return;
    if (e.target === ref.current) {
      onClose();
    }
  };

  return (
    <modalContext.Provider value={{ onClose }}>
      <dialog ref={ref} onClick={handleBackdropClick} className={styles.modal}>
        <div className={styles.modalContent}>{children}</div>
      </dialog>
    </modalContext.Provider>
  );
};

const XButton = () => {
  const { onClose } = useModalContext();
  return (
    <button className={styles.XButton} onClick={onClose}>
      <X />
    </button>
  );
};

const Content = ({
  children,
  type,
}: {
  children: ReactNode;
  type?: "default" | "auto";
}) => {
  return <div className={styles.Content({ type: type })}>{children}</div>;
};

const Title = ({ children }: { children: ReactNode }) => {
  return <div className={styles.Title}>{children}</div>;
};

const SubTitle = ({ children }: { children: ReactNode }) => {
  return <div className={styles.SubTitle}>{children}</div>;
};

const Image = () => {
  return <img className={styles.Image} src={Load} alt="모달 이미지" />;
};

const Buttons = ({ children }: { children: ReactNode }) => {
  return <div className={styles.Buttons}>{children}</div>;
};

// 내보내기
Modal.XButton = XButton;
Modal.Content = Content;
Modal.Title = Title;
Modal.SubTitle = SubTitle;
Modal.Image = Image;
Modal.Buttons = Buttons;

export { Modal };

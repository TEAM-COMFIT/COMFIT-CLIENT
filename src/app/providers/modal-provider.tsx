import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { modalStore } from "@/shared/model/store";

import { Modal } from "../../shared/ui/modal/modal";

interface ModalItem {
  id: string;
  content: ReactNode;
  autoPlay?: number;
}

export const ModalProvider = () => {
  const location = useLocation();
  const [modals, setModals] = useState<ModalItem[]>([]);

  useEffect(() => {
    const unsubscribe = modalStore.subscribe(setModals);
    return unsubscribe;
  }, []);

  useEffect(() => {
    modalStore.reset();
  }, [location.key]);

  return (
    <>
      {modals.map((modal) => {
        return (
          <Modal
            key={modal.id}
            isOpen={true}
            autoPlay={modal.autoPlay}
            onClose={() => modalStore.close(modal.id)}
          >
            {modal.content}
          </Modal>
        );
      })}
    </>
  );
};

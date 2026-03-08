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
  const { pathname } = useLocation();
  const [modals, setModals] = useState<ModalItem[]>([]);

  useEffect(() => {
    modalStore.subscribe(setModals);
    return () => modalStore.unsubscribe();
  }, []);

  useEffect(() => {
    modalStore.reset();
  }, [pathname]);

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

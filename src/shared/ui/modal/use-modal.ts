import { useEffect, useRef, useState } from "react";

export const useModal = (autoPlay?: number) => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // 자동 모달 닫힘을 위한 타이머 ref

  const handleModal = () => setIsOpen((prev) => !prev);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    if (autoPlay && autoPlay > 0 && isOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsOpen(false), autoPlay);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [autoPlay, isOpen]);

  return { autoPlay, isOpen, handleModal, openModal, closeModal };
};

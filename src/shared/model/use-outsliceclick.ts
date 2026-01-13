import { useEffect, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(
  isActive: boolean,
  onOutsideClick: () => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isActive) return;

    const handleMouseDown = (event: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isActive, onOutsideClick]);

  return ref;
};

export default useOutsideClick;

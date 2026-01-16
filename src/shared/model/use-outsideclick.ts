import { useEffect, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(
  isActive: boolean,
  onOutsideClick: () => void
) => {
  const ref = useRef<T>(null);
  const handler = useRef(onOutsideClick);

  useEffect(() => {
    handler.current = onOutsideClick;
  }, [onOutsideClick]);

  useEffect(() => {
    if (!isActive) return;

    const handleMouseDown = (event: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target as Node)) {
        handler.current();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isActive]);

  return ref;
};

export default useOutsideClick;

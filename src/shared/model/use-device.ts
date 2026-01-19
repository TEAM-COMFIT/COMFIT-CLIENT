import { useState, useEffect } from "react";

const RESIZE_DEBOUNCE_MS = 100;
const screen = {
  mobile: 425,
} as const;

const useDevice = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(screen.mobile >= window.innerWidth);
    };

    let timeoutId: number;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(checkDevice, RESIZE_DEBOUNCE_MS);
    };

    checkDevice();
    window.addEventListener("resize", debouncedCheck);
    return () => {
      window.removeEventListener("resize", debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  return { isMobile };
};

export default useDevice;

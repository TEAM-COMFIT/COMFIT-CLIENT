import { useState, useEffect } from "react";

const screen = {
  mobile: 375,
} as const;

const useDevice = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const init = () => {
      if (screen.mobile >= window.innerWidth) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  return { isMobile };
};

export default useDevice;

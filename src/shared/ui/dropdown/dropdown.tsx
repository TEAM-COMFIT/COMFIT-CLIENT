import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { DropdownArrow } from "@/shared/assets/icons";
import useOutsideClick from "@/shared/model/use-outsideclick";

import * as styles from "./dropdown.css";

import type { ReactNode } from "react";

type DropdownSize = "medium" | "large" | "full";

interface DropdownContextValue {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  size: DropdownSize;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

const useDropdown = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) {
    throw new Error("드롭다운 내부에서만 사용 가능합니다!");
  }
  return ctx;
};

/* ---------- Root ---------- */
const Dropdown = ({
  children,
  type = "medium",
}: {
  children: ReactNode;
  type?: DropdownSize;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const close = useCallback(() => setIsOpen(false), []);

  const wrapperRef = useOutsideClick<HTMLDivElement>(isOpen, close);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggle,
        close,
        size: type,
      }}
    >
      <div
        ref={wrapperRef}
        className={`${styles.dropdownWrapper} ${styles.dropdownAlign[type]}`}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

/* ---------- Trigger ---------- */
const Trigger = ({ children }: { children: ReactNode }) => {
  const { toggle, isOpen } = useDropdown();

  return (
    <button type="button" onClick={toggle} className={styles.trigger}>
      {children}
      <DropdownArrow
        className={`${styles.arrowIcon} ${
          styles.arrowIconTransition[isOpen ? "open" : "closed"]
        }`}
      />
    </button>
  );
};

/* ---------- Menu ---------- */
const Menu = ({ children }: { children: ReactNode }) => {
  const { isOpen, size } = useDropdown();
  if (!isOpen) return null;

  return (
    <ul
      role="menu"
      className={`${styles.menu} ${styles.menuSize[size]} ${styles.menuAlign[size]}`}
    >
      {children}
    </ul>
  );
};

/* ---------- Item ---------- */
const Item = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  const { close } = useDropdown();

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li role="none">
      <button type="button" onClick={handleClick} className={styles.item}>
        {children}
      </button>
    </li>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export { Dropdown };

import { createContext, useContext, useState } from "react";

import useOutsideClick from "@/shared/model/use-outsliceclick";
import ArrowIcon from "@icons/dropdown_up_arrow.svg?react";

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
    throw new Error("Dropdown components must be used within Dropdown");
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
  const close = () => setIsOpen(false);

  const wrapperRef = useOutsideClick<HTMLDivElement>(isOpen, close);

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
      <ArrowIcon
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
  const { toggle } = useDropdown();

  const handleClick = () => {
    onClick?.();
    toggle();
  };

  return (
    <button type="button" onClick={handleClick} className={styles.item}>
      {children}
    </button>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;

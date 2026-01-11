import { createContext, useContext, useState } from "react";

import ArrowIcon from "@icons/dropdown_up_arrow.svg?react";

import * as styles from "./dropdown.css";

import type { ReactNode } from "react";

type DropdownSize = "small" | "medium" | "large";

interface DropdownContextValue {
  isOpen: boolean;
  toggle: () => void;
  size: DropdownSize;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

const useDropdown = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown components must be used within Dropdown");
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

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
        size: type,
      }}
    >
      <div className={styles.dropdownWrapper}>{children}</div>
    </DropdownContext.Provider>
  );
};

/* ---------- Trigger ---------- */
const Trigger = ({ children }: { children: ReactNode }) => {
  const { toggle, size } = useDropdown();

  return (
    <button
      type="button"
      onClick={toggle}
      className={`${styles.trigger} ${styles.triggerSize[size]}`}
    >
      {children}
      <ArrowIcon />
    </button>
  );
};

/* ---------- Menu ---------- */
const Menu = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useDropdown();
  if (!isOpen) return null;

  return <div className={styles.menu}>{children}</div>;
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

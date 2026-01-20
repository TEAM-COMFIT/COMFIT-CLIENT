import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { DropdownArrow } from "@/shared/assets/icons";
import { useOutsideClick } from "@/shared/model/use-outsideclick";

import * as styles from "./select.css";

import type { ReactNode } from "react";

interface SelectContextValue {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const SelectContext = createContext<SelectContextValue | null>(null);

const useSelect = () => {
  const ctx = useContext(SelectContext);
  if (!ctx) {
    throw new Error("드롭다운 내부에서만 사용 가능합니다!");
  }
  return ctx;
};

/* ---------- Root ---------- */
const Select = ({ children }: { children: ReactNode }) => {
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
    <SelectContext.Provider
      value={{
        isOpen,
        toggle,
        close,
      }}
    >
      <div ref={wrapperRef} className={styles.selectWrapper}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

/* ---------- Trigger ---------- */
interface TriggerProps {
  children: ReactNode;
  hasValue?: boolean; // 값이 선택되었는지 여부를 받는 prop 추가
}

const Trigger = ({ children, hasValue = false }: TriggerProps) => {
  const { toggle, isOpen } = useSelect();

  const getVariant = () => {
    if (isOpen) return "open";
    if (hasValue) return "selected";
    return "closed";
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`${styles.trigger} ${styles.triggerFontColor[getVariant()]}`}
    >
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
  const { isOpen } = useSelect();
  if (!isOpen) return null;

  return (
    <div role="menu" className={styles.menu}>
      {children}
    </div>
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
  const { close } = useSelect();

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.item}
      role="menuitem"
    >
      {children}
    </button>
  );
};

Select.Trigger = Trigger;
Select.Menu = Menu;
Select.Item = Item;

export { Select };

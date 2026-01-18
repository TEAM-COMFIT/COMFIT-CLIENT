import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import {
  CancelIcon,
  CheckIcon,
  CloseIcon,
  ExclamationIcon,
  InfoIcon,
} from "@/shared/assets/icons";

import * as styles from "./alert.css";

import type { AlertProps } from "./alert.types";

const ICON_BY_VARIANT = {
  warning: ExclamationIcon,
  info: InfoIcon,
  success: CheckIcon,
  error: CancelIcon,
} as const;

const GAP_PX = 12;
const CARD_HEIGHT_PX = 80;
const STACK_STEP_PX = 92;

let stack: string[] = [];
const subscribers = new Set<() => void>();

const notify = () => {
  subscribers.forEach((fn) => fn());
};

const subscribe = (fn: () => void) => {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
};

const register = (id: string) => {
  stack = [...stack.filter((x) => x !== id), id];
  notify();

  return () => {
    stack = stack.filter((x) => x !== id);
    notify();
  };
};

const getSnapshot = () => stack;

export const Alert = ({ variant, title, description, onClose }: AlertProps) => {
  const id = useId();
  const Icon = ICON_BY_VARIANT[variant];

  const currentStack = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getSnapshot
  );

  const index = useMemo(() => currentStack.indexOf(id), [currentStack, id]);
  const isRegistered = index !== -1;
  const isLatest = isRegistered && currentStack[currentStack.length - 1] === id;

  const [state, setState] = useState<"entering" | "open" | "closing">(
    "entering"
  );

  const closeTimeoutRef = useRef<number | null>(null);
  const autoDismissRef = useRef<number | null>(null);

  useEffect(() => {
    const unregister = register(id);

    const frame = requestAnimationFrame(() => {
      setState("open");
    });

    return () => {
      unregister();
      cancelAnimationFrame(frame);
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
      if (autoDismissRef.current) window.clearTimeout(autoDismissRef.current);
    };
  }, [id]);

  const requestClose = () => {
    if (state === "closing") return;

    setState("closing");

    if (autoDismissRef.current) {
      window.clearTimeout(autoDismissRef.current);
      autoDismissRef.current = null;
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      onClose();
    }, 200);
  };

  useEffect(() => {
    if (!isLatest) {
      if (autoDismissRef.current) {
        window.clearTimeout(autoDismissRef.current);
        autoDismissRef.current = null;
      }
      return;
    }

    if (state === "closing") return;

    if (autoDismissRef.current) {
      window.clearTimeout(autoDismissRef.current);
      autoDismissRef.current = null;
    }

    autoDismissRef.current = window.setTimeout(() => {
      requestClose();
    }, 3000);

    return () => {
      if (autoDismissRef.current) {
        window.clearTimeout(autoDismissRef.current);
        autoDismissRef.current = null;
      }
    };
  }, [isLatest, state]);

  const offsetY = index >= 0 ? index * STACK_STEP_PX : 0;
  const z = 1000 + (index >= 0 ? index : 0);

  return (
    <div
      className={styles.alertViewport}
      style={
        {
          "--alert-offset-y": `${offsetY}px`,
          "--alert-z": `${z}`,
        } as React.CSSProperties
      }
    >
      <div
        className={styles.alertRoot({ variant })}
        data-state={state}
        role="alert"
        aria-live="polite"
      >
        <Icon className={styles.leadingIcon({ variant })} aria-hidden="true" />

        <div className={styles.textSection}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>

        <button
          type="button"
          className={styles.closeButton}
          onClick={requestClose}
          aria-label="알림 닫기"
        >
          <CloseIcon className={styles.closeIcon} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

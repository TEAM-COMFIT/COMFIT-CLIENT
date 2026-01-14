import { useMemo, useState } from "react";

import * as styles from "./textbox.css";

import type { ChangeEvent, TextareaHTMLAttributes } from "react";

export type TextboxMode = "edit" | "view";

export type TextboxType =
  | "jobDescription"
  | "situation"
  | "task"
  | "result"
  | "action";

const TEXTBOX_MAX_LENGTH: Partial<Record<TextboxType, number>> = {
  jobDescription: 300,
  situation: 200,
  task: 200,
  result: 300,
  action: 500,
};

export interface TextboxProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className" | "style" | "maxLength"
> {
  type: TextboxType;
  mode?: TextboxMode;

  value?: string;
  defaultValue?: string;
}

const Textbox = ({
  type,
  mode = "edit",

  value,
  defaultValue,
  onChange,

  placeholder,
  ...props
}: TextboxProps) => {
  const isControlled = value !== undefined;

  const [innerValue, setInnerValue] = useState(defaultValue ?? "");

  const maxLength = TEXTBOX_MAX_LENGTH[type];

  const currentValue = isControlled ? (value ?? "") : innerValue;

  const currentLength = useMemo(
    () => currentValue.length,
    [currentValue.length]
  );

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue =
      maxLength !== undefined
        ? e.currentTarget.value.slice(0, maxLength)
        : e.currentTarget.value;
    if (nextValue !== e.currentTarget.value) {
      e.currentTarget.value = nextValue;
    }
    if (!isControlled) {
      setInnerValue(nextValue);
    }
    onChange?.(e);
  };

  const rootClassName = `${styles.wrapper} ${styles.textboxType[type]} ${styles.textboxMode[mode]}`;

  // 뷰어모드: 흰 배경 / 카운터 없음 / Textfield 작동 X
  if (mode === "view") {
    return (
      <div className={rootClassName}>
        <div className={styles.viewer}>{currentValue}</div>
      </div>
    );
  }

  // 수정모드: 회색 배경 / 글자수 제한 표시 / textarea 작동
  return (
    <div className={rootClassName}>
      <textarea
        value={currentValue}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChange}
        className={styles.textarea}
        {...props}
      />
      {maxLength !== undefined && (
        <span className={styles.counter}>
          {currentLength}/{maxLength}자
        </span>
      )}
    </div>
  );
};

export { Textbox };

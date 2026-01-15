import { useMemo, useState } from "react";

import * as styles from "./textfield.css";

import type { ChangeEvent, TextareaHTMLAttributes } from "react";

export type TextfieldMode = "edit" | "view";

export type TextfieldType =
  | "jobDescription"
  | "situation"
  | "task"
  | "result"
  | "action";

const TEXTFIELD_MAX_LENGTH: Partial<Record<TextfieldType, number>> = {
  jobDescription: 300,
  situation: 200,
  task: 200,
  result: 300,
  action: 500,
};

export interface TextfieldProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className" | "style" | "maxLength"
> {
  type: TextfieldType;
  mode?: TextfieldMode;

  value?: string;
  defaultValue?: string;
}

const Textfield = ({
  type,
  mode = "edit",

  value,
  defaultValue,
  onChange,

  placeholder,
  ...props
}: TextfieldProps) => {
  const isControlled = value !== undefined;

  const [innerValue, setInnerValue] = useState(defaultValue ?? "");

  const maxLength = TEXTFIELD_MAX_LENGTH[type];

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

  const rootClassName = `${styles.wrapper} ${styles.textfieldType[type]} ${styles.textfieldMode[mode]}`;

  // 뷰어모드: 흰 배경 / 카운터 없음 / Textfield 작동 X
  if (mode === "view") {
    const isEmpty = currentValue.length === 0;
    const viewValue = isEmpty ? (placeholder ?? "") : currentValue;
    const viewClassName = isEmpty ? styles.viewerPlaceholder : styles.viewer;

    return (
      <div className={rootClassName}>
        <div className={viewClassName}>{viewValue}</div>
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

export { Textfield };

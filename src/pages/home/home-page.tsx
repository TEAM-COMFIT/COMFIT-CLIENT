import { useState } from "react";

import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import { Textfield } from "@/shared/ui/textfield";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import {
  appContainer,
  textfieldPreviewHeader,
  textfieldPreviewItem,
  textfieldPreviewLabel,
  textfieldPreviewList,
  textfieldPreviewSection,
  textfieldPreviewTitle,
  textfieldPreviewToggle,
  textfieldPreviewToggleButton,
  textfieldPreviewToggleButtonState,
} from "./home-page.css";

import type { ChangeEventHandler } from "react";

type Mode = "edit" | "view";

type TextfieldKey =
  | "jobDescription"
  | "situation"
  | "task"
  | "result"
  | "action";

const PLACEHOLDER =
  "ex) 대학생 마케팅 동아리에서 신규 브랜드 인지도를 높이기 위한 프로젝트를 진행함.";

type TextfieldFieldProps = {
  type: TextfieldKey;
  label: string;
  placeholder?: string;
  mode: Mode;
  value: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const TextfieldField = ({
  label,
  type,
  placeholder,
  mode,
  value,
  onChange,
}: TextfieldFieldProps) => (
  <div className={textfieldPreviewItem}>
    <p className={textfieldPreviewLabel}>{label}</p>
    <Textfield
      type={type}
      mode={mode}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const HomePage = () => {
  const [mode, setMode] = useState<Mode>("edit");
  const isEditable = mode === "edit";

  const [values, setValues] = useState<Record<TextfieldKey, string>>({
    jobDescription: "",
    situation: "",
    task: "",
    result: "",
    action: "",
  });

  const handleChange =
    (key: TextfieldKey): ChangeEventHandler<HTMLTextAreaElement> =>
    (e) => {
      setValues((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <CompanyGridContainer />
      <MatchingListContainer />
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />]{" "}
      <section className={textfieldPreviewSection}>
        <div className={textfieldPreviewHeader}>
          <h2 className={textfieldPreviewTitle}>Textfield Preview</h2>

          <div className={textfieldPreviewToggle}>
            <button
              type="button"
              onClick={() => setMode("edit")}
              className={`${textfieldPreviewToggleButton} ${
                textfieldPreviewToggleButtonState[
                  mode === "edit" ? "active" : "inactive"
                ]
              }`}
            >
              수정모드
            </button>

            <button
              type="button"
              onClick={() => setMode("view")}
              className={`${textfieldPreviewToggleButton} ${
                textfieldPreviewToggleButtonState[
                  mode === "view" ? "active" : "inactive"
                ]
              }`}
            >
              뷰어모드
            </button>
          </div>
        </div>

        <div className={textfieldPreviewList}>
          <TextfieldField
            label="직무 설명 (Job Description)"
            type="jobDescription"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.jobDescription}
            onChange={isEditable ? handleChange("jobDescription") : undefined}
          />
          <TextfieldField
            label="Situation"
            type="situation"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.situation}
            onChange={isEditable ? handleChange("situation") : undefined}
          />
          <TextfieldField
            label="Task"
            type="task"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.task}
            onChange={isEditable ? handleChange("task") : undefined}
          />
          <TextfieldField
            label="Result"
            type="result"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.result}
            onChange={isEditable ? handleChange("result") : undefined}
          />
          <TextfieldField
            label="Action"
            type="action"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.action}
            onChange={isEditable ? handleChange("action") : undefined}
          />
        </div>
      </section>
    </div>
  );
};

export { HomePage };

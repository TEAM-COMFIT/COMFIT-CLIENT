import { useState } from "react";

import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import { Textbox } from "@/shared/ui/textbox";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import {
  appContainer,
  textboxPreviewHeader,
  textboxPreviewItem,
  textboxPreviewLabel,
  textboxPreviewList,
  textboxPreviewSection,
  textboxPreviewTitle,
  textboxPreviewToggle,
  textboxPreviewToggleButton,
  textboxPreviewToggleButtonState,
} from "./home-page.css";

import type { ChangeEventHandler } from "react";

type Mode = "edit" | "view";

type TextboxKey = "jobDescription" | "situation" | "task" | "result" | "action";

const PLACEHOLDER =
  "ex) 대학생 마케팅 동아리에서 신규 브랜드 인지도를 높이기 위한 프로젝트를 진행함.";

type TextboxFieldProps = {
  type: TextboxKey;
  label: string;
  placeholder?: string;
  mode: Mode;
  value: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const TextboxField = ({
  label,
  type,
  placeholder,
  mode,
  value,
  onChange,
}: TextboxFieldProps) => (
  <div className={textboxPreviewItem}>
    <p className={textboxPreviewLabel}>{label}</p>
    <Textbox
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

  const [values, setValues] = useState<Record<TextboxKey, string>>({
    jobDescription: "",
    situation: "",
    task: "",
    result: "",
    action: "",
  });

  const handleChange =
    (key: TextboxKey): ChangeEventHandler<HTMLTextAreaElement> =>
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
      <section className={textboxPreviewSection}>
        <div className={textboxPreviewHeader}>
          <h2 className={textboxPreviewTitle}>Textbox Preview</h2>

          <div className={textboxPreviewToggle}>
            <button
              type="button"
              onClick={() => setMode("edit")}
              className={`${textboxPreviewToggleButton} ${
                textboxPreviewToggleButtonState[
                  mode === "edit" ? "active" : "inactive"
                ]
              }`}
            >
              수정모드
            </button>

            <button
              type="button"
              onClick={() => setMode("view")}
              className={`${textboxPreviewToggleButton} ${
                textboxPreviewToggleButtonState[
                  mode === "view" ? "active" : "inactive"
                ]
              }`}
            >
              뷰어모드
            </button>
          </div>
        </div>

        <div className={textboxPreviewList}>
          <TextboxField
            label="직무 설명 (Job Description)"
            type="jobDescription"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.jobDescription}
            onChange={isEditable ? handleChange("jobDescription") : undefined}
          />
          <TextboxField
            label="Situation"
            type="situation"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.situation}
            onChange={isEditable ? handleChange("situation") : undefined}
          />
          <TextboxField
            label="Task"
            type="task"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.task}
            onChange={isEditable ? handleChange("task") : undefined}
          />
          <TextboxField
            label="Result"
            type="result"
            placeholder={PLACEHOLDER}
            mode={mode}
            value={values.result}
            onChange={isEditable ? handleChange("result") : undefined}
          />
          <TextboxField
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

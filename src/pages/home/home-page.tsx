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
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />
    </div>
  );
};

export { HomePage };

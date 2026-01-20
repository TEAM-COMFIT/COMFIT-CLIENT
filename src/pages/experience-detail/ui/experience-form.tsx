import { useState } from "react";

import { DatePicker } from "@/features/experience-detail";
import { Button, Dropdown, Tooltip } from "@/shared/ui";
import { Textfield } from "@/shared/ui/textfield/textfield";
import { StickyHeader } from "@/widgets";

import * as s from "./experience-form.css";

import type { TextfieldType } from "@/shared/ui/textfield/textfield";

type Mode = "create" | "edit";

interface ExperienceFormProps {
  mode: Mode;
  id?: string;
}

type ExperienceType = "PROJECT" | "ACTIVITY" | "INTERNSHIP" | "ETC";

const EXPERIENCE_TYPE_LABEL: Record<ExperienceType, string> = {
  PROJECT: "프로젝트",
  ACTIVITY: "대외활동",
  INTERNSHIP: "인턴",
  ETC: "기타",
};

const ExperienceForm = ({ mode, id }: ExperienceFormProps) => {
  // TODO: mode에 따라 서버 값으로 치환
  const [isDefault, setIsDefault] = useState(false);

  const [experienceType, setExperienceType] = useState<ExperienceType | null>(
    null,
  );
  const [title, setTitle] = useState("");

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [situation, setSituation] = useState("");
  const [task, setTask] = useState("");
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    // TODO: 경험 등록/수정 API 호출
    // TODO: 유효성 검증 (날짜 형식/필수값)
    // TODO: alert는 나중에 붙이기
    // eslint-disable-next-line no-console
    console.log({
      mode,
      id,
      isDefault,
      experienceType,
      title,
      startDate,
      endDate,
      situation,
      task,
      action,
      result,
    });
  };

  return (
    <main className={s.page}>
      <StickyHeader
        isDefault={isDefault}
        onToggle={() => setIsDefault((prev) => !prev)}
        rightSlot={
          <Button variant="primary" size="small" onClick={handleSubmit}>
            작성완료
          </Button>
        }
      />

      <section className={s.outerSection}>
        <div className={s.panel}>
          <div className={s.card}>
            <div className={s.innerColumn}>
              <div className={s.topGroup}>
                <div className={s.topRow}>
                  <div className={s.dropdownWrap}>
                    <Dropdown type="medium">
                      <Dropdown.Trigger>
                        {experienceType
                          ? EXPERIENCE_TYPE_LABEL[experienceType]
                          : "경험종류"}
                      </Dropdown.Trigger>

                      <Dropdown.Menu>
                        {(Object.keys(EXPERIENCE_TYPE_LABEL) as ExperienceType[]).map(
                          (key) => (
                            <Dropdown.Item
                              key={key}
                              onClick={() => setExperienceType(key)}
                            >
                              {EXPERIENCE_TYPE_LABEL[key]}
                            </Dropdown.Item>
                          ),
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className={s.tooltipWrap}>
                    <Tooltip type="guide" label="작성 가이드">
                      <div className={s.tooltipBox}>
                        <div className={s.tooltipInner}>
                          <p className={s.tooltipLead}>
                            아래와 같은 내용을 포함한 채용 공고의 직무
                            설명(JD)을 그대로 붙여넣어 주세요.
                          </p>

                          <p className={s.tooltipText}>{"<포함하면 좋은 내용>"}</p>

                          <ul className={s.tooltipList}>
                            <li className={s.tooltipListItem}>
                              해당 직무의 주요 업무
                            </li>
                            <li className={s.tooltipListItem}>
                              팀 내에서 맡게 될 역할
                            </li>
                            <li className={s.tooltipListItem}>
                              요구되는 역량 및 경험
                            </li>
                            <li className={s.tooltipListItem}>
                              우대 사항 (선택)
                            </li>
                          </ul>

                          <p className={s.tooltipText}>
                            직무와 무관한 자기소개, 경험 서술은 분석 정확도를
                            낮출 수 있어요.
                          </p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                </div>

                <div className={s.titleBlock}>
                  <input
                    className={s.titleInput}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력해주세요."
                  />
                </div>

                <div className={s.dateRow}>
                  <DatePicker
                    selectedDate={startDate}
                    onChangeSelectedDate={setStartDate}
                    placeholder="시작일"
                  />

                  <span className={s.dateDash} aria-hidden="true">
                    —
                  </span>

                  <DatePicker
                    selectedDate={endDate}
                    onChangeSelectedDate={setEndDate}
                    placeholder="종료일"
                    minDate={startDate ?? undefined}
                  />
                </div>
              </div>

              <div className={s.starGroup}>
                <StarField
                  label="Situation (상황)"
                  type="situation"
                  value={situation}
                  onChange={setSituation}
                  placeholder="예) 대학생 마케팅 동아리에서 신규 브랜드 인지도를 높이기 위한 프로젝트를 진행함."
                />

                <StarField
                  label="Task (과제)"
                  type="task"
                  value={task}
                  onChange={setTask}
                  placeholder="예) 한정된 예산 안에서 브랜드 메시지를 효과적으로 전달할 콘텐츠 방향을 설정해야 했음."
                />

                <StarField
                  label="Action (행동)"
                  type="action"
                  value={action}
                  onChange={setAction}
                  placeholder={`예) 초기에는 트렌디한 이미지 위주의 콘텐츠를 기획했으나, 게시 후 반응을 분석한 결과 조회 수 대비 브랜드 인지 반응이 낮다고 판단함.
이에 메시지 전달이 명확한 짧은 영상 포맷으로 방향을 조정함.`}
                />

                <StarField
                  label="Result (결과)"
                  type="result"
                  value={result}
                  onChange={setResult}
                  placeholder={`예) 캠페인 종료 시 브랜드 계정 팔로워 수가 약 25% 증가했고, 댓글에서 브랜드 언급 비율이 눈에 띄게 높아짐
이 결과를 통해 콘텐츠 성과를 단순 수치가 아니라 메시지 전달 관점에서 해석하는 중요성을 배움.`}
                />
              </div>

              {mode === "edit" && id ? <p className={s.debug}>id: {id}</p> : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { ExperienceForm };

interface StarFieldProps {
  label: string;
  type: TextfieldType;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

const StarField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
}: StarFieldProps) => {
  return (
    <div className={s.starField}>
      <p className={s.starLabel}>{label}</p>
      <Textfield
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

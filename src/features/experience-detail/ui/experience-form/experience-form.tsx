import { DatePicker } from "@/features/experience-detail/ui/date-picker/date-picker";
import { Button, Dropdown, Tooltip } from "@/shared/ui";
import { Textfield } from "@/shared/ui/textfield/textfield";
import { GUIDE_TOOLTIP_CONTENT } from "@/shared/ui/tooltip/tooltip.content";
import { StickyHeader } from "@/widgets";

import { EXPERIENCE_TYPE_LIST, EXPERIENCE_TYPE_OPTIONS } from "../../config";
import {
  useExperienceActions,
  useExperienceDraft,
  useIsDraftDefault,
} from "../../store/selectors";
import { useExperienceDateField } from "../../lib/date-field";
import { useExperienceSubmit, useExperienceHeaderActions } from "../../model/use-actions";

import * as s from "./experience-form.css";

import type { TextfieldType } from "@/shared/ui/textfield/textfield";
const ExperienceForm = () => {
  // Store 연결
  const draft = useExperienceDraft();
  const isDraftDefault = useIsDraftDefault();
  const { setDraftField } = useExperienceActions();


  const { onToggleDefault } = useExperienceHeaderActions();
  const { submit } = useExperienceSubmit();

  // DatePicker 어댑터
  const startDateField = useExperienceDateField("startAt");
  const endDateField = useExperienceDateField("endAt");

  return (
    <main className={s.page}>
      <StickyHeader
        isDefault={isDraftDefault}
        onToggle={onToggleDefault}
        rightSlot={
          <Button variant="primary" size="small" onClick={submit}>
            작성완료
          </Button>
        }
      />

      <section className={s.outerSection}>
        <div className={s.panel}>
          <div className={s.card}>
            <div className={s.innerColumn}>
              {/* 경험 기본 정보 영역 */}
              <div className={s.topGroup}>
                <div className={s.topRow}>
                  {/* 경험 유형 드롭다운 */}
                  <div className={s.dropdownWrap}>
                    <Dropdown type="medium">
                      <Dropdown.Trigger>
                        {draft.type
                          ? EXPERIENCE_TYPE_OPTIONS[draft.type]
                          : "경험종류"}
                      </Dropdown.Trigger>

                      <Dropdown.Menu>
                        {EXPERIENCE_TYPE_LIST.map(({ code, label }) => (
                          <Dropdown.Item
                            key={code}
                            onClick={() => setDraftField("type", code)}
                          >
                            {label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  {/* 작성 가이드 툴팁 */}
                  <div className={s.tooltipWrap}>
                    <Tooltip type="guide" label="작성 가이드">
                      {GUIDE_TOOLTIP_CONTENT}
                    </Tooltip>
                  </div>
                </div>

                {/* 경험 제목 (2~30자) */}
                <div className={s.titleBlock}>
                  <input
                    className={s.titleInput}
                    type="text"
                    value={draft.title}
                    onChange={(e) => setDraftField("title", e.target.value)}
                    placeholder="제목을 입력해주세요."
                    maxLength={30}
                  />
                </div>

                {/* 경험 기간 (DatePicker) */}
                <div className={s.dateRow}>
                  <DatePicker
                    selectedDate={startDateField.selectedDate}
                    onChangeSelectedDate={startDateField.onChangeSelectedDate}
                    placeholder="시작일"
                  />
                  <span className={s.dateDash} aria-hidden="true">
                    —
                  </span>
                  <DatePicker
                    selectedDate={endDateField.selectedDate}
                    onChangeSelectedDate={endDateField.onChangeSelectedDate}
                    placeholder="종료일"
                    minDate={startDateField.selectedDate ?? undefined}
                  />
                </div>
              </div>

              {/* STAR 필드 */}
              <div className={s.starGroup}>
                <StarField
                  label="Situation (상황)"
                  type="situation"
                  value={draft.situation}
                  onChange={(v) => setDraftField("situation", v)}
                  placeholder="예) 대학생 마케팅 동아리에서 신규 브랜드 인지도를 높이기 위한 프로젝트를 진행함."
                />

                <StarField
                  label="Task (과제)"
                  type="task"
                  value={draft.task}
                  onChange={(v) => setDraftField("task", v)}
                  placeholder="예) 한정된 예산 안에서 브랜드 메시지를 효과적으로 전달할 콘텐츠 방향을 설정해야 했음."
                />

                <StarField
                  label="Action (행동)"
                  type="action"
                  value={draft.action}
                  onChange={(v) => setDraftField("action", v)}
                  placeholder="예) 초기에는 트렌디한 이미지 위주의 콘텐츠를 기획했으나, 게시 후 반응을 분석한 결과 조회 수 대비 브랜드 인지 반응이 낮다고 판단함.
이에 메시지 전달이 명확한 짧은 영상 포맷으로 방향을 조정함."
                />

                <StarField
                  label="Result (결과)"
                  type="result"
                  value={draft.result}
                  onChange={(v) => setDraftField("result", v)}
                  placeholder={`캠페인 종료 시 브랜드 계정 팔로워 수가 약 25% 증가했고, 댓글에서 브랜드 언급 비율이 눈에 띄게 높아짐.\n이 결과를 통해 콘텐츠 성과를 단순 수치가 아니라 메시지 전달 관점에서 해석하는 중요성을 배움.`}
                />
              </div>
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

const StarField = ({ label, type, value, onChange, placeholder }: StarFieldProps) => {
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

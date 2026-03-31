import { IconTrash } from "@/shared/assets/icons";
import {
  EXPERIENCE_TYPE,
  type ExperienceTypeCode,
} from "@/shared/config/experience";
import { parseYMD } from "@/shared/lib/format-date";
import { modalStore } from "@/shared/model/store";
import { ModalBasic, Tooltip } from "@/shared/ui";
import { Button } from "@/shared/ui/button/button";
import { Tag } from "@/shared/ui/tag/tag";
import { Textfield } from "@/shared/ui/textfield/textfield";
import { HELP_TOOLTIP_CONTENT } from "@/shared/ui/tooltip/tooltip.content";
import { StickyHeader } from "@/widgets";

import { useExperienceHeaderActions } from "../../model/use-actions";
import {
  useExperienceCurrent,
  useIsDraftDefault,
} from "../../store/use-experience-hooks";
import { DatePicker } from "../date-picker/date-picker";

import * as s from "./experience-viewer.css";

const ExperienceViewer = () => {
  const current = useExperienceCurrent();
  const isDraftDefault = useIsDraftDefault();

  const { showEditDelete, onClickEdit, onClickDelete, onToggleDefault } =
    useExperienceHeaderActions();

  const startDate = current?.startAt ? parseYMD(current.startAt) : null;
  const endDate = current?.endAt ? parseYMD(current.endAt) : null;

  if (!current) {
    return (
      <main className={s.page}>
        <div className={s.outerSection}>
          <p>경험 정보를 불러오는 중...</p>
        </div>
      </main>
    );
  }

  const typeLabel =
    current.type && current.type in EXPERIENCE_TYPE
      ? EXPERIENCE_TYPE[current.type as ExperienceTypeCode]
      : "미지정";

  const handleOpenDeleteModal = () => {
    modalStore.open(
      <ModalBasic
        icon={<IconTrash width={48} height={48} />}
        title="이 경험을 삭제할까요?"
        subTitle="삭제하면 다시 복구할 수 없어요"
        closeText="삭제하기"
        confirmText="취소하기"
        onClose={() => {
          onClickDelete(); // 실제 삭제 동작
          modalStore.reset(); // 모달 닫기
        }}
        onConfirm={() => {
          modalStore.reset(); // 취소 시 닫기
        }}
      />
    );
  };

  return (
    <main className={s.page}>
      <StickyHeader
        isDefault={isDraftDefault}
        onToggle={onToggleDefault}
        rightSlot={
          showEditDelete && (
            <>
              <Button
                variant="secondary"
                size="small"
                onClick={handleOpenDeleteModal}
              >
                삭제하기
              </Button>
              <Button variant="primary" size="small" onClick={onClickEdit}>
                수정하기
              </Button>
            </>
          )
        }
      />

      <section className={s.outerSection}>
        <div className={s.panel}>
          <div className={s.topGroup}>
            <div className={s.topRow}>
              <Tag type="register">{typeLabel}</Tag>
            </div>

            <div className={s.titleRow}>
              <h1 className={s.viewerTitle}>{current.title}</h1>

              <div className={s.tooltipWrap}>
                <Tooltip type="help" label="도움말">
                  {HELP_TOOLTIP_CONTENT}
                </Tooltip>
              </div>
            </div>

            <div className={s.dateRow}>
              <DatePicker
                selectedDate={startDate}
                onChangeSelectedDate={() => {}}
                placeholder="시작일"
                disabled
              />

              <span className={s.dateDash} aria-hidden="true">
                —
              </span>

              <DatePicker
                selectedDate={endDate}
                onChangeSelectedDate={() => {}}
                placeholder="종료일"
                disabled
              />
            </div>
          </div>

          <div className={s.starGroup}>
            <div className={s.starField}>
              <p className={s.starLabel}>Situation (상황)</p>
              <Textfield
                type="situation"
                mode="view"
                value={current.situation}
              />
            </div>

            <div className={s.starField}>
              <p className={s.starLabel}>Task (과제)</p>
              <Textfield type="task" mode="view" value={current.task} />
            </div>

            <div className={s.starField}>
              <p className={s.starLabel}>Action (행동)</p>
              <Textfield type="action" mode="view" value={current.action} />
            </div>

            <div className={s.starField}>
              <p className={s.starLabel}>Result (결과)</p>
              <Textfield type="result" mode="view" value={current.result} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { ExperienceViewer };

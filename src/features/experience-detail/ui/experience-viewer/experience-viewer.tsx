import { EXPERIENCE_TYPE } from "@/shared/config/experience";
import { parseYMD } from "@/shared/lib/format-date";
import { ModalBasic, Tooltip } from "@/shared/ui";
import { Button } from "@/shared/ui/button/button";
import { useModal } from "@/shared/ui/modal/use-modal";
import { Tag } from "@/shared/ui/tag/tag";
import { Textfield } from "@/shared/ui/textfield/textfield";
import { GUIDE_TOOLTIP_CONTENT } from "@/shared/ui/tooltip/tooltip.content";
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

  const { isOpen: isDeleteModalOpen, handleModal: toggleDeleteModal } =
    useModal();

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

  const typeLabel = current.type ? EXPERIENCE_TYPE[current.type] : "미지정";

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
                onClick={toggleDeleteModal}
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
                <Tooltip type="guide" label="작성 가이드">
                  {GUIDE_TOOLTIP_CONTENT}
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

      <ModalBasic
        title="이 경험을 삭제하시겠습니까?"
        subTitle="작성한 내용은 즉시 제거되며, 복구할 수 없습니다."
        closeText="취소"
        confirmText="삭제"
        isOpen={isDeleteModalOpen}
        onClose={toggleDeleteModal}
        onConfirm={() => {
          toggleDeleteModal();
          onClickDelete();
        }}
      />
    </main>
  );
};

export { ExperienceViewer };

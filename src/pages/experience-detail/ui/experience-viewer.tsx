import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ModalBasic } from "@/shared/ui";
import { Button } from "@/shared/ui/button/button";
import { useModal } from "@/shared/ui/modal/use-modal";
import { StickyHeader } from "@/widgets/sticky-header/sticky-header";

const ExperienceViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isOpen, handleModal } = useModal();

  // TODO: 서버 isDefault로 대체 (기본경험 설정 API 추가예정)
  const [isDefault, setIsDefault] = useState(false);

  return (
    <main>
      <StickyHeader
        isDefault={isDefault}
        onToggle={() => setIsDefault((prev) => !prev)}
        rightSlot={
          <>
            <Button variant="secondary" size="small" onClick={handleModal}>
              삭제하기
            </Button>
            <Button
              variant="primary"
              size="small"
              onClick={() => {
                if (!id) return;
                navigate(`/experience/${id}/edit`);
              }}
            >
              수정하기
            </Button>
          </>
        }
      />
      <h1>Experience Viewer - {id}</h1>
      <ModalBasic
        title="이 경험을 삭제하시겠습니까?"
        subTitle="작성한 내용은 즉시 제거되면, 복구할 수 없습니다."
        closeText="취소"
        confirmText="삭제"
        isOpen={isOpen}
        onClose={handleModal}
        onConfirm={() => {
          /** TODO: 경험 삭제 API 호출 함수 */
        }}
      />
    </main>
  );
};

export { ExperienceViewer };

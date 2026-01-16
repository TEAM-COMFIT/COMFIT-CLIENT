import { useState } from "react";

import { Button } from "@/shared/ui/button/button";
import { StickyHeader } from "@/widgets/index";

type mode = "create" | "edit";

interface ExperienceFormProps {
  mode: mode;
  id?: string;
}

const ExperienceForm = ({ mode, id }: ExperienceFormProps) => {
  // TODO: mode에 따라 isEdit 모드 분기 처리
  const [isDefault, setIsDefault] = useState(false); // TODO: 서버의 isDefault로 대체 (경험수정 API 활용)

  return (
    <main>
      <StickyHeader
        isDefault={isDefault}
        onToggle={() => setIsDefault((prev) => !prev)}
        rightSlot={
          <Button
            variant="primary"
            size="small"
            onClick={() => {
              /** TODO: 경험 수정/등록 API */
            }}
          >
            작성완료
          </Button>
        }
      />
      <h1>
        Experience Form - {mode} {mode === "edit" && `${id}`}
      </h1>
    </main>
  );
};

export { ExperienceForm };

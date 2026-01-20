import { useNavigate } from "react-router-dom";

import { ERROR } from "@/shared/assets/images";
import { Button } from "@/shared/ui";

import * as styles from "./not-found-page.css";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <img src={ERROR} alt="에러 이미지" />
      <div className={styles.wrapper}>
        <div className={styles.title}>페이지를 찾을 수 없습니다</div>
        <div className={styles.sub}>
          홈으로 돌아가 기업 탐색을 이어가볼까요?
        </div>
      </div>
      <Button onClick={() => navigate("/")}>메인페이지</Button>
    </div>
  );
};

import { KEY_SPINNER } from "@/shared/assets/gifs";

import * as styles from "./loading-page.css";

export const LoadingPage = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <img src={KEY_SPINNER} className={styles.spinner} alt="로딩 중" />
        <div className={styles.text}>페이지가 로딩중입니다 ...</div>
      </div>
    </div>
  );
};

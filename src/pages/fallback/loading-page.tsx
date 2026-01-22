import { LOADING } from "@/shared/assets/images";

import * as styles from "./loading-page.css";

export const LoadingPage = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <img src={LOADING} className={styles.spinner} alt="로딩 중" />
        <div className={styles.text}>잠시만 기다려주세요</div>
      </div>
    </div>
  );
};

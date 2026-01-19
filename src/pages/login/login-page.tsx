import {
  getAuthURL,
  type SocialProvider,
} from "@/features/login/config/auth-config";
import { IconKakao } from "@/shared/assets/icons";

import * as styles from "./login-page.css";

const LoginPage = () => {
  const handleLogin = (type: SocialProvider) => {
    window.location.href = getAuthURL[type]();
  };
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.header}>기업과 나를 연결하는 열쇠, 컴핏</h1>
        <p className={styles.description}>
          자소서가 두려운
          <br /> 취준생들에게 용기와 선택의 힘을
        </p>
      </div>

      <button className={styles.kakao} onClick={() => handleLogin("KAKAO")}>
        <IconKakao />
        <span className={styles.kakaoText}>카카오 로그인</span>
      </button>
    </div>
  );
};

export { LoginPage };

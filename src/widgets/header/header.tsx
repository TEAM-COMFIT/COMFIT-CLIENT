import { Link } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { useAuthStore } from "@/app/store";
import { Avatar } from "@/shared/assets/icons";
import Logo from "@/shared/assets/images/comfit_logo.png";

import * as styles from "./header.css";

const NAV_ITEMS = [
  { to: ROUTES.LANDING, label: "소개" },
  { to: ROUTES.EXPERIENCE_MATCHING, label: "경험 매칭 AI" },
  { to: ROUTES.EXPERIENCE, label: "경험 등록" },
  { to: ROUTES.MATCHING_LIST, label: "매칭 경험 목록" },
];

export const Header = () => {
  const { isLoggedIn } = useAuthStore();
  const name = "김컴피"; // TODO: user store/api 연동 후 교체

  return (
    <header className={styles.headerLayout}>
      <div className={styles.header}>
        <div className={styles.menus}>
          <Link to="/" aria-label="메인으로 이동">
            <img src={Logo} className={styles.menu} alt="로고" />
          </Link>
          <nav className={styles.textMenus}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.to} to={item.to} className={styles.menu}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.profile}>
          {isLoggedIn ? (
            <>
              <Link
                to="/mypage"
                aria-label="탭 메뉴"
                className={styles.iconLink}
              >
                <Avatar width={38} height={38} className={styles.avatar} />
              </Link>
              <span className={styles.name}>{name}님</span>
            </>
          ) : (
            <Link to="/login" className={styles.name}>
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

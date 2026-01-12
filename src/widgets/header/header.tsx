import { Link } from "react-router-dom";

import { useAuthStore } from "@/app/store";
import { Avatar, Logo } from "@/shared/assets/icons";

import * as styles from "./header.css";

const NAV_ITEMS = [
  { to: "/onboarding", label: "소개" },
  { to: "/experience-matching", label: "경험 매칭 AI" },
  { to: "/experience", label: "경험 등록" },
  { to: "/matching", label: "매칭 경험 목록" },
];

export const Header = () => {
  const { isLoggedIn } = useAuthStore();
  const name = "김컴피";

  return (
    <header className={styles.headerLayout}>
      <div className={styles.header}>
        <div className={styles.menus}>
          <Link to="/" aria-label="메인으로 이동">
            <Logo className={styles.menu} />
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
              <Link to="/mypage" aria-label="탭 메뉴">
                <Avatar width={38} height={38} />
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

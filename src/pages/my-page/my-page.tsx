import { Button } from "@/shared/ui";

import * as styles from "./my-page.css";
import { MyPageCards } from "./ui/my-page-cards";

import type { MyPageCardsProps } from "./ui/my-page-cards";

const MyPage = () => {
  const me: MyPageCardsProps = {
    name: "김컴피",
    email: "jyslys2669@gmail.com",
    educationLevel: "BACHELOR",
    firstIndustry: "MEDIA_CONTENTS",
    firstJob: "B2B_MARKETING",
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{me.name}님</h1>

          <Button variant="primary" size="small" onClick={() => {}}>
            {/* TODO: 로그아웃 API 연동 */}
            로그아웃
          </Button>
        </div>

        <main className={styles.body}>
          <MyPageCards {...me} />
        </main>
      </div>
    </div>
  );
};

export { MyPage };

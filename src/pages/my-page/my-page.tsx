import { Button } from "@/shared/ui";

import * as styles from "./my-page.css";
import { MyPageCards } from "./ui/my-page-cards";

const MyPage = () => {
  const me = {
    name: "김컴피",
    email: "jyslys2669@gmail.com",
    educationLevel: "BACHELOR",
    firstIndustry: "MEDIA_CONTENTS",
    fistJob: "B2B_MARKETING",
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{me.name}님</h1>

          <Button variant="primary" size="small">
            로그아웃
          </Button>
        </header>

        <main className={styles.body}>
          <MyPageCards {...me} />
        </main>
      </div>
    </div>
  );
};

export { MyPage };

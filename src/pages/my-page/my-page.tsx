import { useGetProfile } from "@/features/my-page";
import { Button } from "@/shared/ui";

import * as styles from "./my-page.css";
import { MyPageCards } from "./ui/my-page-cards";

const MyPage = () => {
  const { data } = useGetProfile({ enabled: true });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{data?.name}님</h1>

        <Button variant="primary" size="small" onClick={() => {}}>
          {/* TODO: 로그아웃 API 연동 */}
          로그아웃
        </Button>
      </div>

      <MyPageCards {...data} />
    </div>
  );
};

export { MyPage };

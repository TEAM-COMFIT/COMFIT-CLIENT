import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/app/store";
import { useGetProfile, useLogout } from "@/features/my-page";
import { queryClient } from "@/shared/api";
import { Button } from "@/shared/ui";

import * as styles from "./my-page.css";
import { MyPageCards } from "./ui/my-page-cards";

const MyPage = () => {
  const { actions, isLoggedIn } = useAuthStore();
  const { data } = useGetProfile({ enabled: isLoggedIn });
  const { mutate: logout, isPending } = useLogout();

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    logout(undefined, {
      onSettled: () => {
        actions.logout(); // 스토리지에서 토큰 삭제
        queryClient.clear();
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{data?.name}님</h1>

        <Button
          variant="primary"
          size="small"
          onClick={handleLogout}
          disabled={isPending}
        >
          로그아웃
        </Button>
      </div>

      <MyPageCards {...data} />
    </div>
  );
};

export { MyPage };

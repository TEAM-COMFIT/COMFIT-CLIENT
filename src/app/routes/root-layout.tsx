import { Outlet } from "react-router-dom";

import { useDevice } from "@/shared/model/use-device";
import { Header } from "@widgets/index";

import { themeVars } from "../styles";

export const RootLayout = () => {
  const { isMobile } = useDevice();
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: !isMobile ? themeVars.height.header : "0",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

import { Outlet } from "react-router-dom";

import { Header } from "@widgets/index";

import { themeVars } from "../styles";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: themeVars.height.header }}>
        <Outlet />
      </main>
    </>
  );
};

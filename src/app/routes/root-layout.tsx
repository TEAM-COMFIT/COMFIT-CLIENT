import { Outlet } from "react-router-dom";

import { Header } from "@widgets/index";

import { StoreResetListener } from "../providers/store-reset-listener";

export const RootLayout = () => {
  return (
    <>
      <StoreResetListener />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

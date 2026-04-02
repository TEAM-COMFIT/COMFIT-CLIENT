import { Outlet } from "react-router-dom";

import { Header } from "@widgets/index";

import { ModalProvider } from "../providers/modal-provider";
import { StoreResetListener } from "../providers/store-reset-listener";

export const RootLayout = () => {
  return (
    <>
      <ModalProvider />
      <StoreResetListener />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

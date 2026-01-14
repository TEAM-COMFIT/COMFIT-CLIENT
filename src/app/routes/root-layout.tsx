import { Outlet } from "react-router-dom";

import { Header } from "@widgets/header/header";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { LoadingPage } from "@/pages/fallback/loading-page";

import { router } from "./routes/app-router";

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;

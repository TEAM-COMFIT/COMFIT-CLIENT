import { RouterProvider } from "react-router-dom";
import { router } from "./routes/appRoutes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

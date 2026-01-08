import { RouterProvider } from "react-router-dom";

import ThemeProvider from "./providers";
import { router } from "./routes/app-router";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;

import { HomePage } from "@/pages/home/home-page";

import { ThemeProvider } from "./providers";
const App = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;

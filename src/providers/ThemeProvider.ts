import { createContext } from "react";

// constants
import { APP_THEHE } from "../constants";

const ThemeProvider = createContext<{
  theme: string;
  setTheme: (prev: any) => void;
}>({
  theme: APP_THEHE.LIGHT,
  setTheme: (prev: any) => undefined,
});

export { ThemeProvider };

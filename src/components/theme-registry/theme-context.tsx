import { PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import getTheme from "./theme-config";

type Props = {
  children: ReactNode;
};

type ThemeModeT = {
  toggleMode: () => void;
  mode: PaletteMode;
};

const ThemeModeContext = createContext<ThemeModeT>({
  toggleMode: () => {},
  mode: "dark"
});

export const getThemeMode = (mode: PaletteMode) => {
  let themeMode = mode;
  const localTheme = localStorage.getItem("theme");

  if (localTheme === null) {
    localStorage.setItem("theme", themeMode);
  } else {
    themeMode = localTheme as PaletteMode;
  }

  return themeMode;
};

export const ThemeProvider = (props: Props) => {
  const initialThemeMode = "dark";

  const [mode, setMode] = useState<PaletteMode>(initialThemeMode);

  useEffect(() => {
    const _mode = getThemeMode(initialThemeMode);
    setMode(_mode);
  }, [initialThemeMode]);

  const toggleMode = () => {
    setMode((prev) => {
      if (prev === "light") {
        const theme = "dark";
        localStorage.setItem("theme", theme);

        return theme;
      }

      const theme = "light";
      localStorage.setItem("theme", theme);

      return theme;
    });
  };

  const colorMode = useMemo(() => ({ toggleMode, mode }), [mode]);
  const theme = getTheme(mode);

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);

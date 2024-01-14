import { PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import getTheme from "./theme-config";

type Props = {
  children: ReactNode;
};

type ThemeModeT = {
  toggleMode: () => void;
  mode: PaletteMode;
}

const ThemeModeContext = createContext<ThemeModeT>({ toggleMode: () => {}, mode: "dark" });

export const ThemeProvider = (props: Props) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

 const toggleMode = () => {
   setMode((prev) => (prev === "light" ? "dark" : "light"));
 };

 const colorMode = useMemo(() => ({ toggleMode, mode }), [mode]);
 const theme = getTheme(mode);

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        {props.children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export const useThemeMode = () => useContext(ThemeModeContext);
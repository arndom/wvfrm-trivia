import { createTheme } from '@mui/material/styles';
import { dinPro, roboto } from './fontConfig';
import { darkTheme, lightTheme } from './paletteConfig';
import { PaletteMode } from '@mui/material';

const mode = "dark" as PaletteMode

const theme = createTheme({
  palette: {
    mode,
    ...(mode === "light" ? lightTheme : darkTheme),
  },

  typography: {
    fontFamily: [
      dinPro.style.fontFamily,
      roboto.style.fontFamily,
      "sans-serif",
    ].join(","),
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: ({ ownerState }) => ({
          clipPath:
            "polygon(18px 0%, 100% 0%, calc(100% - 18px) 100%, 0% 100%)",
          textAlign: "center",
          borderRadius: 0,
          transition:
            "opacity 200ms,border-color 200ms,background-color 200ms,color 200ms",

          "&:hover": {
            opacity: 0.8,
            ...(ownerState.color === "primary" && {
              backgroundColor: "#E5202B",
            }),
            ...(ownerState.color === "secondary" && {
              backgroundColor: "#27292A",
            }),
          },
        }),
      },
    },
  },
});

export default theme;
import { dinPro } from "./font-config";
import { darkTheme, lightTheme } from "./palette-config";
import { experimental_extendTheme as extendTheme } from "@mui/material";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: lightTheme
    },
    dark: {
      palette: darkTheme
    }
  },

  typography: {
    fontFamily: [dinPro.style.fontFamily, "sans-serif"].join(",")
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
              backgroundColor: "#E5202B"
            }),
            ...(ownerState.color === "secondary" && {
              backgroundColor: "#27292A"
            })
          }
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "1rem",
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.85rem"
          }
        })
      }
    }
  }
});

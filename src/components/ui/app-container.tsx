"use client";

import { Container as MuiContainer, styled } from "@mui/material";

// Type casting (as TypeX) because component type is missing without it.
// https://mui.com/material-ui/guides/typescript/#complications-with-the-component-prop
const AppContainer = styled(MuiContainer)(({ theme }) => ({
  "& .background_container": {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: -1,

    backgroundImage: "url(/bkg.webp)",
    backgroundSize: "cover",
    backgroundBlendMode: "darken",
    backgroundPosition: "center",

    ...(theme.palette.mode === "dark" && {
      filter: "invert(1)",
      transition: "filter 200ms"
    })
  },

  "& .main": {
    position: "relative",
    minHeight: "calc(100vh - 104px)",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      minHeight: "80vh"
    }
  }
})) as typeof MuiContainer;

export default AppContainer;

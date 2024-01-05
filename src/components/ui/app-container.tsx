'use client';

import { Container as MuiContainer, styled } from "@mui/material";

// Type casting (as TypeX) because component type is missing without it.
// https://mui.com/material-ui/guides/typescript/#complications-with-the-component-prop
const AppContainer = styled(MuiContainer)(({ theme }) => ({
  "& .background_video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    ...(theme.palette.mode === "dark" && {
      filter: "invert(1)",
      transition: "filter 200ms",
    }),
  },

  "& .main": {
    position: "relative",
  }
})) as typeof MuiContainer;

export default AppContainer

"use client";
import { AppBar, styled } from "@mui/material";

export const NavAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)",
  backgroundImage: "unset",
  justifyContent: "center",
  flexDirection: "row",
  "& .logo": {
    width: 40,
    height: 40
  },

  [theme.breakpoints.down("md")]: {
    "& .logo": {
      width: 35,
      height: 35
    },
  },
})) as typeof AppBar;

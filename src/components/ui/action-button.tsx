"use client";


import { styled, Button } from "@mui/material";

const ActionButton = styled(Button)(({ theme }) => ({
  padding: "16px 40px",
  fontSize: "1rem",
  fontWeight: 900,
  fontStyle: "normal",
  lineHeight: 1.5,

  width: 224,
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

export default ActionButton;

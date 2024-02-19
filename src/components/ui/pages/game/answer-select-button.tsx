"use client";
import { Button, styled } from "@mui/material";

const AnswerSelectButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "16px 80px",
  fontWeight: 900,
  fontSize: "1.125rem",
  minWidth: "100%",
  justifyContent: "flex-start",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center"
  }
}));

export default AnswerSelectButton;

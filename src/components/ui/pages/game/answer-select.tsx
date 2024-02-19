"use client";
import { Radio, RadioProps } from "@mui/material";
import React from "react";
import AnswerSelectButton from "./answer-select-button";

interface AnswerSelectProps extends RadioProps {
  label: string;
}
export const AnswerSelect = (props: AnswerSelectProps) => {
  const { label, ...rest } = props;

  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={
        <AnswerSelectButton variant="contained">{label}</AnswerSelectButton>
      }
      icon={
        <AnswerSelectButton variant="contained" color="secondary">
          {label}
        </AnswerSelectButton>
      }
      {...rest}
    />
  );
};

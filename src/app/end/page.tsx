"use client";

import AboutIcon from "@/components/icons/about";
import EndAwardIcon from "@/components/icons/end-award";
import LeaderboardIcon from "@/components/icons/leaderboard";
import SettingsIcon from "@/components/icons/settings";
import ActionButton from "@/components/ui/action-button";
import HomeIntroText from "@/components/ui/home-into-text";
import {
  Box,
  Button,
  Radio,
  RadioProps,
  styled,
} from "@mui/material";
import React, {  } from "react";

interface AnswerSelectProps extends RadioProps {
  label: string;
}

const AnswerSelectButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "16px 80px",
  fontWeight: 900,
  fontSize: "1.125rem",
  minWidth: "100%",
  justifyContent: "flex-start",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const AnswerSelect = (props: AnswerSelectProps) => {
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

const EndPage = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 5, lg: 0 },
        minHeight: { lg: "inherit" },
      }}
    >
      <Box
        mt={{ xs: 0, md: "-52px" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <EndAwardIcon sx={{ fontSize: { xs: "2.75rem", md: "4.75rem" } }} />
        <HomeIntroText
          component="p"
          sx={{ lineHeight: { xs: "2.75rem", md: "5rem", xl: "6rem" } }}
        >
          Congrats!
        </HomeIntroText>
        <HomeIntroText
          component="p"
          sx={{ lineHeight: {  md: "5rem", xl: "6rem" } }}
        >
          Score:{" "}
          <HomeIntroText
            component="span"
            color="primary"
            sx={{ lineHeight: {  md: "5rem", xl: "6rem" } }}
          >
            3200PTS
          </HomeIntroText>
        </HomeIntroText>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ActionButton variant="contained">Play Again</ActionButton>

        <ActionButton
          variant="contained"
          color="secondary"
          // onClick={onOpenLeaderboard}
        >
          <LeaderboardIcon sx={{ mr: 1 }} />
          Leaderboard
        </ActionButton>

        <ActionButton
          variant="contained"
          color="secondary"
          // onClick={onOpenAbout}
        >
          <AboutIcon sx={{ mr: 1 }} />
          Share
        </ActionButton>

        <ActionButton
          variant="contained"
          color="secondary"
          // onClick={onOpenSettings}
        >
          <SettingsIcon sx={{ mr: 1 }} />
          Home
        </ActionButton>
      </Box>
    </Box>
  );
};

export default EndPage;

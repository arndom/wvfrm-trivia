"use client";

import AboutIcon from "@/components/icons/about";
import EndAwardIcon from "@/components/icons/end-award";
import LeaderboardIcon from "@/components/icons/leaderboard";
import SettingsIcon from "@/components/icons/settings";
import ActionButton from "@/components/ui/action-button";
import { useAppDialogs } from "@/components/ui/app-dialogs";
import Headertext from "@/components/ui/header-text";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const EndPage = () => {
  const { onOpenLeaderboard } = useAppDialogs();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 5, lg: 0 },
        minHeight: { lg: "inherit" }
      }}
    >
      <Box
        mt={{ xs: 0, md: "-52px" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1
        }}
      >
        <EndAwardIcon sx={{ fontSize: { xs: "2.75rem", md: "4.75rem" } }} />
        <Headertext
          component="p"
          sx={{ lineHeight: { xs: "2.75rem", md: "5rem", xl: "6rem" } }}
        >
          Congrats!
        </Headertext>
        <Headertext
          component="p"
          sx={{ lineHeight: { md: "5rem", xl: "6rem" } }}
        >
          Score:{" "}
          <Headertext
            component="span"
            color="primary"
            sx={{ lineHeight: { md: "5rem", xl: "6rem" } }}
          >
            3200PTS
          </Headertext>
        </Headertext>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <ActionButton variant="contained" component={Link} href="/select">
          Play Again
        </ActionButton>

        <ActionButton
          variant="contained"
          color="secondary"
          onClick={onOpenLeaderboard}
        >
          <LeaderboardIcon sx={{ mr: 1 }} />
          Leaderboard
        </ActionButton>

        <ActionButton variant="contained" color="secondary">
          <AboutIcon sx={{ mr: 1 }} />
          Share
        </ActionButton>

        <ActionButton
          variant="contained"
          color="secondary"
          component={Link}
          href="/"
        >
          <SettingsIcon sx={{ mr: 1 }} />
          Home
        </ActionButton>
      </Box>
    </Box>
  );
};

export default EndPage;

"use client";

import { Box } from "@mui/material";
import ActionButton from "@/components/ui/action-button";
import Headertext from "@/components/ui/header-text";
import LeaderboardIcon from "@/components/icons/leaderboard";
import AboutIcon from "@/components/icons/about";
import SettingsIcon from "@/components/icons/settings";
import Link from "next/link";
import { useAppDialogs } from "@/components/ui/app-dialogs";
import { useDispatch } from "react-redux";
import { resetGame } from "@/context/redux";

export default function Home() {
  const { onOpenLeaderboard, onOpenAbout, onOpenSettings } = useAppDialogs();

  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(resetGame());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 0 },
        justifyContent: "center",
        alignItems: "center",
        minHeight: "inherit"
      }}
    >
      <Box mt={{ xs: "-32px", md: "-52px" }}>
        <Headertext component="p">
          Welcome to{" "}
          <Headertext component="span" color="primary">
            WVFRM
          </Headertext>{" "}
          trivia
        </Headertext>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <ActionButton
            variant="contained"
            component={Link}
            href="/select"
            onClick={handlePlay}
          >
            Start GameT
          </ActionButton>

          <ActionButton
            variant="contained"
            color="secondary"
            onClick={onOpenLeaderboard}
          >
            <LeaderboardIcon sx={{ mr: 1 }} />
            Leaderboard
          </ActionButton>

          <ActionButton
            variant="contained"
            color="secondary"
            onClick={onOpenAbout}
          >
            <AboutIcon sx={{ mr: 1 }} />
            About
          </ActionButton>

          <ActionButton
            variant="contained"
            color="secondary"
            onClick={onOpenSettings}
          >
            <SettingsIcon sx={{ mr: 1 }} />
            Settings
          </ActionButton>
        </Box>
      </Box>
    </Box>
  );
}

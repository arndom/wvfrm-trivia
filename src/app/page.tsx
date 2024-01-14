"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import ActionButton from "@/components/ui/action-button";
import Headertext from "@/components/ui/header-text";
import LeaderboardIcon from "@/components/icons/leaderboard";
import AboutIcon from "@/components/icons/about";
import SettingsIcon from "@/components/icons/settings";
import SettingsDialog from "@/components/ui/app-dialogs/settings-dialog";
import AboutDialog from "@/components/ui/app-dialogs/about-dialog";
import LeaderboardDialog from "@/components/ui/app-dialogs/leaderboard-dialog";
import Link from "next/link";

export default function Home() {
  const [openLeaderboardDialog, setOpenLeaderboardDialog] = useState(false);
  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);

  const handleLeaderboardDialogClose = () => setOpenLeaderboardDialog(false);
  const handleAboutDialogClose = () => setOpenAboutDialog(false);
  const handleSettingsDialogClose = () => setOpenSettingsDialog(false);

  const onOpenLeaderboard = () => setOpenLeaderboardDialog(true);
  const onOpenAbout = () => setOpenAboutDialog(true);
  const onOpenSettings = () => setOpenSettingsDialog(true);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 0 },
          justifyContent: "center",
          alignItems: "center",
          minHeight: "inherit",
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
              justifyContent: "center",
            }}
          >
            <ActionButton variant="contained" component={Link} href="/select">Start Game</ActionButton>

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

      <SettingsDialog
        open={openSettingsDialog}
        onClose={handleSettingsDialogClose}
      />
      <AboutDialog open={openAboutDialog} onClose={handleAboutDialogClose} />
      <LeaderboardDialog
        open={openLeaderboardDialog}
        onClose={handleLeaderboardDialogClose}
      />
    </>
  );
}

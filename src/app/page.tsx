"use client";

import styles from "./page.module.scss";
import { Box, Typography, alpha } from "@mui/material";
import ActionButton from "@/components/ui/action-button";
import HomeIntroText from "@/components/ui/home-into-text";
import UserStatCard from "@/components/ui/user-stat-card";
import PlusIcon from "@/components/icons/plus";
import Switch from "@/components/ui/base-switch";
import LeaderboardIcon from "@/components/icons/leaderboard";
import { Aoboshi_One } from "next/font/google";
import AboutIcon from "@/components/icons/about";
import SettingsIcon from "@/components/icons/settings";
import { useState } from "react";
import BaseDialog from "@/components/ui/base-dialog";
import GitHubIcon from "@/components/icons/github";
import InfoIcon from "@/components/icons/info";
import { ContentButton } from "@/components/ui/content-button";
import { ContentHolder } from "@/components/ui/content-holder";

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
          minHeight: "inherit"
        }}
      >
        <HomeIntroText component="p">
          Welcome to{" "}
          <HomeIntroText component="span" color="primary">
            WVFRM
          </HomeIntroText>{" "}
          trivia
        </HomeIntroText>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ActionButton variant="contained">Start Game</ActionButton>

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

      <BaseDialog open={openSettingsDialog} onClose={handleSettingsDialogClose}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <HomeIntroText
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem", xl: "3rem" },
              lineHeight: { xs: "2rem", md: "2.75rem", xl: "3rem" },
            }}
          >
            Settings
          </HomeIntroText>

          <ContentHolder>
            <Typography>Sound Effects</Typography>
            <Switch defaultChecked />
          </ContentHolder>

          <ContentHolder>
            <Typography>Dark Mode</Typography>
            <Switch />
          </ContentHolder>
        </Box>
      </BaseDialog>

      <BaseDialog open={openAboutDialog} onClose={handleAboutDialogClose}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <HomeIntroText
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem", xl: "3rem" },
              lineHeight: { xs: "2rem", md: "2.75rem", xl: "3rem" },
            }}
          >
            About
          </HomeIntroText>

          <ContentButton variant="contained">
            <GitHubIcon
              sx={{
                mr: 1,
                "& path": (theme) => ({
                  fill: theme.palette.primary.contrastText,
                }),
              }}
            />
            <Typography>Contribute to Game</Typography>
          </ContentButton>

          <ContentHolder
            sx={{
              border: "none",
              background: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.secondary.contrastText,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <InfoIcon
                sx={{
                  mr: 1,
                  "& path": (theme) => ({
                    fill: theme.palette.primary.contrastText,
                  }),
                }}
              />
              <Typography
                sx={{
                  "& a": {
                    fontStyle: "italic",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  },
                }}
              >
                Created by <a href="#">arndom</a> & <a href="#">shereef</a>
              </Typography>
            </Box>
          </ContentHolder>
        </Box>
      </BaseDialog>

      <BaseDialog
        open={openLeaderboardDialog}
        onClose={handleLeaderboardDialogClose}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <HomeIntroText
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem", xl: "3rem" },
              lineHeight: { xs: "2rem", md: "2.75rem", xl: "3rem" },
            }}
          >
            Leaderboard
          </HomeIntroText>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,

              "& .plus": {
                fontSize: "0.5rem",

             "& path": {
                  fill: (theme) => theme.palette.text.primary,
                  stroke: (theme) => theme.palette.text.primary,
                },
              },
            }}
          >
            {Array(10)
              .fill(5)
              .map((item, ind) => (
                <Box key={ind} sx={{ display: "flex" }}>
                  <PlusIcon className="plus" />
                  <Box sx={{ margin: { xs: "8px 16px", sm: "8px 24px" } }}>
                    <UserStatCard />
                  </Box>
                  <PlusIcon className="plus" />
                </Box>
              ))}
          </Box>
        </Box>
      </BaseDialog>
    </>
  );
}

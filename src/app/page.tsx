"use client";

import styles from "./page.module.scss";
import { Box, Button, Typography, alpha, styled } from "@mui/material";
import ActionButton from "@/components/ui/action-button";
import HomeIntroText from "@/components/ui/home-into-text";
import UserStatCard from "@/components/ui/user-stat-card";
import PlusIcon from "@/components/icons/plus";

const CarouselBlur = styled(Box)(({theme}) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "5%",
  background: `linear-gradient(180deg, ${
    theme.palette.background.default
  } 0%, ${alpha(theme.palette.background.default, 0.75)} 100%)`,
  backdropFilter: "blur(8px)",
}))

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 0 },
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          minHeight: "100vh",
          maxHeight: "790px",
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

          <ActionButton variant="contained" color="secondary">
            Leaderboard
          </ActionButton>

          <ActionButton variant="contained" color="secondary">
            About
          </ActionButton>

          <ActionButton variant="contained" color="secondary">
            Settings
          </ActionButton>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          position: "relative",
          overflow: "hidden",
          py: 2,

          "@keyframes scrollAnimation": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },

          "& .plus": {
            fontSize: "0.5rem",

            "& path": {
              fill: (theme) => theme.palette.text.primary,
              stroke: (theme) => theme.palette.text.primary,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            animation: "scrollAnimation 8s linear infinite",
          }}
        >
          {Array(10)
            .fill(5)
            .map((item, ind) => (
              <Box key={ind}>
                <PlusIcon className="plus" />
                <Box sx={{ margin: "8px 24px" }}>
                  <UserStatCard />
                </Box>
                <PlusIcon className="plus" />
              </Box>
            ))}
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
          }}
        >
          <CarouselBlur sx={{ left: -1 }} />
          <CarouselBlur sx={{ right: -1 }} />
        </Box>
      </Box>
    </Box>
  );
}

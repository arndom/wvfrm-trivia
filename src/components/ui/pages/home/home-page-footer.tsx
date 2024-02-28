"use client";

import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box, Typography } from "@mui/material";
import UserStatCard from "../../user-stat-card";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/context/game/redux";

const HomePageFooter = () => {
  const pathname = usePathname();
  const { user, leaderboard } = useSelector((state: RootState) => state.game);

  if (pathname !== "/") return null;

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.vars.palette.background.default,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        width: "100%",
        py: { xs: 0, sm: 2 },

        "@keyframes scrollAnimation": {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(-100%)"
          }
        },

        "& .plus": {
          fontSize: "0.5rem",

          "& path": {
            fill: (theme) => theme.vars.palette.text.primary,
            stroke: (theme) => theme.vars.palette.text.primary
          }
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          animation: "scrollAnimation 6s linear infinite",
          width: "50%"
        }}
      >
        {leaderboard.map((leaderboardUser, ind) => {
          const current = leaderboardUser.uid === user?.uid;

          return (
            <Box key={ind} sx={{ display: "flex" }}>
              <Typography
                className="plus"
                color={current ? "primary" : "text.primary"}
              >
                +
              </Typography>
              <Box sx={{ margin: { xs: "8px 16px", sm: "8px 24px" } }}>
                <UserStatCard user={leaderboardUser} />
              </Box>
              <Typography
                className="plus"
                color={current ? "primary" : "text.primary"}
              >
                +
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HomePageFooter;

"use client";

import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box, BoxProps, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AvatarIcon from "../icons/avatar";
import CupIcon from "../icons/cup";
import StickerIcon from "../icons/sticker";
import { UserT } from "@/context/types";

interface Props extends BoxProps {
  user?: UserT | null;
}

const UserStatCard = (props: Props) => {
  const { user, ...rest } = props;

  const [displayName, setDisplayName] = useState("anon-xx");
  const [points, setPoints] = useState("0");
  const [games, setGames] = useState("0");

  useEffect(() => {
    if (user && user.name) {
      setDisplayName(user.name);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const formatter = Intl.NumberFormat("en", { notation: "compact" });
      const points = formatter.format(user.points);
      const games = formatter.format(user.games);

      setPoints(points);
      setGames(games);
    }
  }, [user]);

  return (
    <Box
      sx={{
        background: (theme) => theme.vars.palette.background.paper,
        clipPath:
          "polygon(1.25rem 0%, 100% 0, 100% calc(100% - 1.25rem), calc(100% - 1.25rem) 100%, 0 100%, 0% 1.25rem)",
        width: "fit-content",
        "&:hover": {
          cursor: "pointer"
        }
      }}
      {...rest}
    >
      <Box
        className="stat-card"
        sx={{
          paddingY: 2,
          paddingLeft: { xs: 2, sm: 3 },
          paddingRight: { xs: 2, sm: 4 },
          display: "flex",
          alignItems: "center",
          gap: 1,
          whiteSpace: "nowrap"
        }}
      >
        <AvatarIcon
          sx={{
            fontSize: { xs: "1.85rem", sm: "2.5rem" },
            "& path": {
              fill: (theme) => theme.vars.palette.text.primary
            }
          }}
        />

        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: 900,
              fontStyle: "italic",
              marginBottom: 1,
              fontSize: { xs: "0.75rem", sm: "1rem" }
            }}
          >
            User: {displayName}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 0.125
              }}
            >
              <CupIcon
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem" }
                }}
              />
              <Typography
                fontWeight={500}
                sx={{
                  fontSize: { xs: "0.75rem", sm: "1rem" }
                }}
              >
                {games}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 0.125
              }}
            >
              <StickerIcon
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem" }
                }}
              />
              <Typography
                fontWeight={500}
                sx={{
                  fontSize: { xs: "0.75rem", sm: "1rem" }
                }}
              >
                {points} pts
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserStatCard;

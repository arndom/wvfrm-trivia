"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import AvatarIcon from "../icons/avatar";
import CupIcon from "../icons/cup";
import StickerIcon from "../icons/sticker";

const UserStatCard = () => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.paper,
        clipPath:
          "polygon(1.25rem 0%, 100% 0, 100% calc(100% - 1.25rem), calc(100% - 1.25rem) 100%, 0 100%, 0% 1.25rem)",
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          padding: { xs: 1, sm: 2},
          paddingLeft: { xs: 1, sm: 3},
          paddingRight: {xs: 2, sm: 4},
          display: "flex",
          alignItems: "center",
          gap:{ xs: 0.25, sm: 1},
          whiteSpace: "nowrap", // corrected property name from text-wrap to whiteSpace
        }}
      >
        <AvatarIcon
          sx={{
            fontSize: {xs: "1.5rem", sm: "2.5rem"},
            "& path": {
              fill: (theme) => theme.palette.text.primary,
            },
          }}
        />

        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: 900,
              fontStyle: "italic",
              marginBottom: 1,
            }}
          >
            User: gamer-24
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 0.125,
              }}
            >
              <CupIcon />
              <Typography fontWeight={500}>12</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 0.125,
              }}
            >
              <StickerIcon />
              <Typography fontWeight={500}>103M pts</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserStatCard;

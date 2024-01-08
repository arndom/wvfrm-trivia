"use client";

import { Box, alpha, styled } from "@mui/material";
import PlusIcon from "../icons/plus";
import UserStatCard from "./user-stat-card";
import { usePathname } from "next/navigation";

const HomeFooter = () => {
  const pathname = usePathname();

  if ( pathname !== '/') return null;

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        width: "100%",
        py: { xs: 0, sm: 2 },

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
          animation: "scrollAnimation 6s linear infinite",
          width: "50%",
        }}
      >
        {Array(10)
          .fill(5)
          .map((item, ind) => (
            <Box key={ind}>
              <PlusIcon className="plus" />
              <Box sx={{ margin: {xs: "8px 16px", sm: "8px 24px"} }}>
                <UserStatCard />
              </Box>
              <PlusIcon className="plus" />
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default HomeFooter
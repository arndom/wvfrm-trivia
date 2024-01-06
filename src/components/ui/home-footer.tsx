"use client";

import { Box, alpha, styled } from "@mui/material";
import PlusIcon from "../icons/plus";
import UserStatCard from "./user-stat-card";

const CarouselBlur = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "10%",
  background: `linear-gradient(180deg, ${
    theme.palette.background.default
  } 0%, ${alpha(theme.palette.background.default, 0.75)} 100%)`,
  backdropFilter: "blur(8px)",
  [theme.breakpoints.down("sm")]: {
    width: "5%",
  },
}));


const HomeFooter = () => {

  if (window && window.location.pathname !== '/') return null;

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
  );
}

export default HomeFooter
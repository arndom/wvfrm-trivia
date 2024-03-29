"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box } from "@mui/material";
import Link from "next/link";

export const Logo = () => {
  const width = { xs: 35, md: 40 };
  const height = { xs: width.xs / 2, md: width.md / 2 };
  const skew = 26.5;
  const border = 2;
  const topMd = `calc(${width.md}px - 10px - ${border}px)`;
  const topXs = `calc(${width.xs}px - 10px - ${border - 1.25}px)`;

  const main = {
    width,
    height,
    position: "absolute"
  };

  return (
    <Box
      component={Link}
      href="/"
      sx={{
        display: "grid",
        placeItems: "center",
        position: "relative",
        width,
        height: width,
        transform: { xs: "scale(0.9)", md: "scale(1)" }
      }}
    >
      <Box
        sx={{
          ...main,
          boxSizing: "border-box",
          MozBoxSizing: "border-box",
          WebkitBoxSizing: "border-box",

          border: (theme) =>
            `${border}px solid ${theme.vars.palette.primary.main}`,
          borderRightWidth: border + 0.25,
          borderLeftWidth: border + 0.25,
          transform: `skewY(${skew}deg)`
        }}
      />
      <Box
        sx={(theme) => ({
          ...main,
          background: "#111",
          [theme.getColorSchemeSelector("dark")]: {
            background: "#FFFFFF"
          },
          transform: `skewY(-${skew}deg)`
        })}
      />
      <Box
        sx={{
          width,
          height: border,
          background: (theme) => theme.vars.palette.primary.main,
          position: "absolute",
          top: { xs: topXs, md: topMd },
          transform: `skewY(${skew}deg)`
        }}
      />
    </Box>
  );
};

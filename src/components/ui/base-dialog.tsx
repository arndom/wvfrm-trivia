"use client";

import {
  Box,
  Dialog,
  DialogContent,
  DialogProps,
  IconButton,
  Typography,
  alpha,
  styled
} from "@mui/material";
import { ReactNode, useState } from "react";
import CloseIcon from "@/components/icons/close";

const CloseButton = styled(IconButton)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary.dark
      : theme.palette.background.paper,
  borderRadius: 0,
  width: "fit-content",
  transform: "translate(100%, -100%)",
  position: "fixed",

  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    bottom: 0,

    transform: "unset"
  },

  "& .MuiSvgIcon-root": {
    fontSize: "0.75rem",

    "& path": {
      fill: theme.palette.secondary.contrastText,
    },
  },

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const transparentScrollbarStyle = {
  /* Track */
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 5px transparent",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: "transparent",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "transparent",
  },
};

const BaseDialog = (props: DialogProps) => {
  const { open, onClose, children, sx } = props

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "transparent",
          borderRadius: 0,
          boxShadow: "unset",
          backgroundImage: "unset",
          overflow: "hidden",
          margin: "auto"
        },
        ...sx,
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",

          overflowY: "unset",
          m: { md: 2 },
          p: 0,
          position: "relative",
        }}
      >
        {/* @ts-ignore */}
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <Box
          sx={{
            height: { xs: 300, md: 360 },
            overflowY: "auto",
            ...transparentScrollbarStyle,

            backgroundColor: (theme) => theme.palette.background.default,
            clipPath:
              "polygon(50px 0%, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0% 50px)",
          }}
        >
          <Box
            sx={{
              px: { xs: 4, md: 10 },
              py: 4,
              minWidth: { xs: 270, md: 330 },
              minHeight: { xs: 300, md: 360 },
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
              justifyContent: "center",
              gap: 3,

            }}
          >
            {children}
            <Typography
              variant="caption"
              sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.6), textAlign: "center" }}
            >
              #####
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;

// game category
{/* <Box
  className={styles.polygon2}
  sx={{
    background: (theme) => theme.palette.background.paper,
    boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.25)",
  }}
>
  <Box p={4}>
    <Box py={3}>
      <img
        style={{
          width: "308px",
          height: "270px",
          position: "relative",
        }}
        src="https://via.placeholder.com/308x270"
      />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: 24,
          fontStyle: "italic",
          fontWeight: "900",
          textTransform: "uppercase",
        }}
      >
        Special trivia
      </Typography>

      <Typography
        fontWeight={500}
        fontSize="14px"
        sx={{
          fontSize: 14,
          fontWeight: "500",
          textTransform: "capitalize",
          color: (theme) => alpha(theme.palette.text.primary, 0.25),
        }}
      >
        Based on special guest or event
      </Typography>
    </Box>
  </Box>
</Box>; */}
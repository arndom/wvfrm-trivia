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
  transform: "translateX(100%)",
  mb: 0.5,

  "& .MuiSvgIcon-root": {
    fontSize: "0.65rem",

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
          m: 2,
        }}
      >
        {/* @ts-ignore */}
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <Box
          sx={{
            height: 360,
            overflowY: "auto",
            ...transparentScrollbarStyle,

            backgroundColor: (theme) => theme.palette.background.default,
            clipPath:
              "polygon(50px 0%, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0% 50px)",
          }}
        >
          <Box
            sx={{
              px: { md: 10 },
              py: 4,
              minWidth: { md: 330 },
              minHeight: 360,
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
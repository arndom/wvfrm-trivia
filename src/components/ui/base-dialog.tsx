"use client";

import {
  Box,
  Dialog,
  DialogContent,
  DialogProps,
  IconButton,
  styled
} from "@mui/material";
import CloseIcon from "@/components/icons/close";

const CloseButton = styled(IconButton)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary.dark
      : theme.palette.primary.main,
  borderRadius: 0,
  width: "fit-content",
  transform: "translate(100%, -100%)",
  position: "fixed",

  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    zIndex: 1,
    left: "50%",
    bottom: 0,

    transform: "translateX(-50%)"
  },

  "& .MuiSvgIcon-root": {
    fontSize: "0.75rem",

    "& path": {
      fill: theme.palette.secondary.contrastText
    }
  },

  "&:hover": {
    backgroundColor: theme.palette.primary.main
  }
}));

const transparentScrollbarStyle = {
  /* Track */
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 5px transparent"
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: "transparent"
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "transparent"
  }
};

const BaseDialog = (props: DialogProps) => {
  const { open, onClose, children, sx } = props;

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
        ...sx
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",

          overflowY: "unset",
          m: { md: 2 },
          px: 0,
          py: "28px",
          position: "relative"
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
              "polygon(50px 0%, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0% 50px)"
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
              gap: 3
            }}
          >
            {children}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;

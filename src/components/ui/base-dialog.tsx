"use client";

import styles from "./page.module.scss";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import AvatarIcon from "@/components/icons/avatar";
import CupIcon from "@/components/icons/cup";
import StickerIcon from "@/components/icons/sticker";
import { useState } from "react";
import CloseIcon from "@/components/icons/close";
const BaseDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => setOpenDialog(false);

  const toggleOpenModal = () => setOpenDialog((prev) => !prev);


  return (
    <Dialog
      onClose={handleDialogClose}
      open={openDialog}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "transparent",
          borderRadius: 0,
          boxShadow: "unset",
          backgroundImage: "unset",
        },
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
        <IconButton
          onClick={handleDialogClose}
          sx={{
            backgroundColor: (theme) =>
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
                fill: (theme) => theme.palette.secondary.contrastText,
              },
            },

            "&:hover": {
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            p: 5,
            clipPath:
              "polygon(50px 0%, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0% 50px)",
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              component="span"
              color="primary"
              sx={{
                fontSize: "18px",
                textTransform: "uppercase",
                fontWeight: 900,
              }}
            >
              wvfRm
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
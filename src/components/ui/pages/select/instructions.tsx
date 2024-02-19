import { Box, Typography, Button, CircularProgress } from "@mui/material";
import Headertext from "../../header-text";
import { useState } from "react";
import { GameModeT } from "@/context/types";

// import { useRouter } from "next/navigation";

interface Props {
  callback: () => Promise<void>;
  mode: GameModeT;
}

const Instructions = (props: Props) => {
  const { callback, mode } = props;
  const [loading, setLoading] = useState(false);

  const questionNumber = mode === "classic" ? 10 : 3;

  const handleCallback = async () => {
    setLoading(true);
    await callback();
    setLoading(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        alignItems: "center"
      }}
    >
      <Headertext
        sx={{
          fontSize: { xs: "2rem", md: "2.75rem", xl: "3rem" },
          lineHeight: { xs: "2rem", md: "2.75rem", xl: "3rem" }
        }}
      >
        Instruction
      </Headertext>

      <Typography
        sx={{ textAlign: "center", maxWidth: { xs: "230px", md: "unset" } }}
      >
        Once the game starts, you&apos;ve got {questionNumber} seconds per
        question.
      </Typography>

      <Button
        variant="contained"
        onClick={handleCallback}
        disabled={loading}
        sx={{
          textTransform: "none",
          padding: "10px 20px",
          width: 200,

          "& .MuiCircularProgress-root": {
            ml: 1,
            width: "18px !important",
            height: "18px !important"
          },

          "&:hover": (theme) => ({
            [theme.breakpoints.down("md")]: {
              opacity: "unset",
              backgroundColor: "unset"
            }
          })
        }}
      >
        {!loading && "Start"}
        {loading && <CircularProgress color="primary" />}
      </Button>
    </Box>
  );
};

export default Instructions;

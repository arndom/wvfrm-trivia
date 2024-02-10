import { Box, Typography, Button, CircularProgress } from "@mui/material";
import Headertext from "../../header-text";
import { useState } from "react";
import { SECS_PER_QUESTION } from "@/context/types";

// import { useRouter } from "next/navigation";

interface Props {
  callback: () => Promise<void>;
}

const Step2 = (props: Props) => {
  const { callback } = props;
  const [loading, setLoading] = useState(false);

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
        Once the game starts, you&apos;ve got {SECS_PER_QUESTION} seconds per
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
          }
        }}
      >
        {!loading && "Start"}
        {loading && <CircularProgress color="primary" />}
      </Button>
    </Box>
  );
};

export default Step2;

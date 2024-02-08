import { Box, Typography, Button } from "@mui/material";
import Headertext from "../../header-text";

// import { useRouter } from "next/navigation";

interface Props {
  callback: () => void;
}

const Step2 = (props: Props) => {
  const { callback } = props;

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
        Once the game starts, you&apos;ve got 5 seconds per question.
      </Typography>

      <Button
        variant="contained"
        onClick={callback}
        sx={{
          textTransform: "none",
          padding: "10px 20px",
          width: 200
        }}
      >
        Start
      </Button>
    </Box>
  );
};

export default Step2;

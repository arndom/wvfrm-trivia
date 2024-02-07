import { Box, FormControl, Button } from "@mui/material";
import Headertext from "../../header-text";
import { SelectPageInput } from "./select-page-input";

interface Props {
  skipHandler: () => void;
  continueHandler: () => void;
}

const Step1 = (props: Props) => {
  const { skipHandler, continueHandler } = props;

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
        Enter Username
      </Headertext>

      <FormControl variant="standard" fullWidth>
        <SelectPageInput fullWidth />
      </FormControl>

      <Box sx={{ display: "flex" }}>
        <Button
          onClick={skipHandler}
          variant="contained"
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            width: 120
          }}
        >
          skip
        </Button>
        <Button
          onClick={continueHandler}
          color="secondary"
          variant="contained"
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            width: 120,
            marginLeft: "-18px"
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Step1;

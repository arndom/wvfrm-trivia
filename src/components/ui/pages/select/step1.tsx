import { Box, FormControl, Button, CircularProgress } from "@mui/material";
import Headertext from "../../header-text";
import { SelectPageInput } from "./select-page-input";
import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateUser } from "@/context/redux";
import { handleNameUpdate } from "@/utils/firebase";

interface Props {
  skipHandler: () => void;
  onContinue: () => void;
}

const Step1 = (props: Props) => {
  const { skipHandler, onContinue } = props;

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const { user } = useSelector((state: RootState) => state.game);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const continueHandler = async () => {
    const clearSpace = (str: string) => str.replace(/\s/g, "");
    const updatedUsername = clearSpace(username);

    if (user) {
      setLoading(true);
      const _user = await handleNameUpdate(user, updatedUsername);

      if (_user) {
        dispatch(updateUser(_user));
      }

      setLoading(false);
      onContinue();
    }
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
        Enter Username
      </Headertext>

      <FormControl variant="standard" fullWidth>
        <SelectPageInput fullWidth value={username} onChange={handleChange} />
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
          disabled={loading}
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            width: 120,
            marginLeft: "-18px",

            "& .MuiCircularProgress-root": {
              ml: 1,
              width: "18px !important",
              height: "18px !important"
            }
          }}
        >
          {!loading && "Continue"}
          {loading && <CircularProgress color="primary" />}
        </Button>
      </Box>
    </Box>
  );
};

export default Step1;

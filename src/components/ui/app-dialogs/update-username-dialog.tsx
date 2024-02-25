import {
  FormControl,
  Button,
  CircularProgress,
  DialogProps,
  Typography
} from "@mui/material";
import { SelectPageInput } from "../pages/select/select-page-input";
import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateLocalUsername } from "@/context/game/redux";
import BaseDialog from "../base-dialog";
import ContentHeader from "./content-header";
import ContentRoot from "./content-root";
import { handleNameUpdate } from "@/utils/firebase";

const UpdateUsernameDialog = (props: DialogProps) => {
  const { open, onClose, ...rest } = props;

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const { user } = useSelector((state: RootState) => state.game);
  const [loading, setLoading] = useState(false);
  const [errorOnUpdate, setErrorOnUpdate] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    setUsername("");
    onClose && onClose(event, reason);
  };

  const updateHandler = async () => {
    const clearSpace = (str: string) => str.replace(/\s/g, "");
    const updatedUsername = clearSpace(username);

    if (user && updatedUsername.length > 0) {
      setLoading(true);

      try {
        await handleNameUpdate(updatedUsername, user.uid);
        dispatch(updateLocalUsername(updatedUsername));
        handleClose({}, "escapeKeyDown");
      } catch (error) {
        console.error("Error updating username:", error);
        setErrorOnUpdate(true);
      }

      setLoading(false);
    }
  };

  return (
    <BaseDialog open={open} onClose={handleClose} {...rest}>
      <ContentRoot
        sx={{
          alignItems: "center"
        }}
      >
        <ContentHeader>Update Username</ContentHeader>

        <FormControl variant="standard" fullWidth>
          <SelectPageInput fullWidth value={username} onChange={handleChange} />
        </FormControl>

        <Button
          variant="contained"
          onClick={updateHandler}
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
            },

            "&:hover": (theme) => ({
              [theme.breakpoints.down("md")]: {
                opacity: "unset",
                backgroundColor: "unset"
              }
            })
          }}
        >
          {!loading && "Update"}
          {loading && <CircularProgress color="primary" />}
        </Button>

        {errorOnUpdate && (
          <Typography variant="caption" color="primary">
            Error updating username !
          </Typography>
        )}
      </ContentRoot>
    </BaseDialog>
  );
};

export default UpdateUsernameDialog;

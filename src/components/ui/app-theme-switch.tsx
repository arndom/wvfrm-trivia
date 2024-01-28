import type {} from "@mui/material/themeCssVarsAugmentation";
import {
  SwitchProps,
  styled,
  useColorScheme

  // useMediaQuery
} from "@mui/material";
import Switch from "./base-switch";
import { ChangeEvent, useEffect, useState } from "react";
import { Mode } from "@mui/system/cssVars/useCurrentColorScheme";

const useCheckedValueModeParser = (
  mode: Mode | undefined,
  systemMode: Mode | undefined
) => {
  // TODO: figure out how handle this - mode will be undefined in server
  // causes light mode on init render to have wrong checked value
  if (!mode) {
    // console.log("here");
  }

  if (mode === "system") {
    return systemMode;
  }

  return mode;
};

const AppThemeSwitch = styled((props: SwitchProps) => {
  const { mode, setMode, systemMode } = useColorScheme();

  const isChecked =
    useCheckedValueModeParser(mode, systemMode) === "light" ? false : true;
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setMode(mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return <Switch checked={checked} onChange={handleChange} {...props} />;
})(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    //unchecked
    color: theme.vars.palette.secondary.contrastText,

    "& + .MuiSwitch-track": {
      backgroundColor: theme.vars.palette.secondary.main,

      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 12,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="rgba(255, 255, 255, 0.6)" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
      }
    },

    "&.Mui-checked": {
      color: theme.vars.palette.secondary.dark,

      "& + .MuiSwitch-track": {
        backgroundColor: theme.vars.palette.secondary.contrastText,

        "&::before": {
          left: -12,
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="rgba(17, 17, 17, 0.6)" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
        }
      }
    }
  }
}));

export default AppThemeSwitch;

import type {} from "@mui/material/themeCssVarsAugmentation";
import { Switch as MuiSwitch, SwitchProps, styled } from "@mui/material";

const Switch = styled((props: SwitchProps) => (
  <MuiSwitch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",

    // unchecked
    color: theme.vars.palette.secondary.contrastText,
    "& + .MuiSwitch-track": {
      backgroundColor: theme.vars.palette.secondary.main,
      opacity: 1,
      border: 0
    },

    "&.Mui-checked": {
      transform: "translateX(26px)", // 52 - 22 - 2 -2
      color: theme.vars.palette.secondary.contrastText,

      "& + .MuiSwitch-track": {
        backgroundColor: theme.vars.palette.primary.main,

        opacity: 1,
        border: 0
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5
      }
    },

    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff"
    },

    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.vars.palette.grey[100],
      [theme.getColorSchemeSelector("dark")]: {
        color: theme.vars.palette.grey[600]
      }
    },

    "&.Mui-disabled + .MuiSwitch-track": {
      opcaity: 0.7,
      [theme.getColorSchemeSelector("dark")]: {
        opcaity: 0.3
      }
    }
  },

  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22
  },

  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    [theme.getColorSchemeSelector("dark")]: {
      backgroundColor: theme.vars.palette.primary.main
    },
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500
    })
  }
})) as typeof MuiSwitch;

export default Switch;

"use client";

import Headertext from "@/components/ui/header-text";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioProps,
  Typography,
  styled
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface AnswerSelectProps extends RadioProps {
  label: string;
}

const AnswerSelectButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "16px 80px",
  fontWeight: 900,
  fontSize: "1.125rem",
  minWidth: "100%",
  justifyContent: "flex-start",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center"
  }
}));

const AnswerSelect = (props: AnswerSelectProps) => {
  const { label, ...rest } = props;

  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={
        <AnswerSelectButton variant="contained">{label}</AnswerSelectButton>
      }
      icon={
        <AnswerSelectButton variant="contained" color="secondary">
          {label}
        </AnswerSelectButton>
      }
      {...rest}
    />
  );
};

const GamePage = () => {
  const [timer, setTimer] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (timer === 0) return;

    const timeoutId = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [timer]);

  // runs immediately after init render
  // triggers countdown
  useEffect(() => {
    setTimer(5);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      router.push("/end");
    }
  }, [router, timer]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 5, lg: 0 },
        minHeight: { lg: "inherit" }
      }}
    >
      <Headertext component="p">
        00:
        <Headertext component="span" color="primary">
          0{timer}
        </Headertext>
        <Headertext
          component="span"
          sx={{ fontSize: { xs: "2rem", md: "2.75rem", xl: "4.25rem" } }}
        >
          sec
        </Headertext>
      </Headertext>

      <Box
        sx={{
          mt: 2,
          mb: { xs: 4, md: 6 },
          background: (theme) => theme.palette.background.default,
          maxWidth: "md",
          borderLeft: (theme) => ({
            xs: "none",
            md: `5px solid ${theme.palette.primary.main}`
          }),
          borderTop: (theme) => ({
            xs: `3.75px solid ${theme.palette.primary.main}`,
            md: "none"
          })
        }}
      >
        <Typography
          sx={{
            p: { xs: 3, md: 4 },
            fontWeight: 900,
            textTransform: "capitalize",
            textAlign: "center",
            fontSize: { xs: "1.25rem", md: "1.75rem", xl: "2.5rem" }
          }}
        >
          Which tech YouTuber unboxed and reviewed the Samsung XXX on August 11,
          2021, the same day they were announced?
        </Typography>
      </Box>

      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: "md",

          "& .MuiRadio-root": {
            width: "100%"
          },

          "& .MuiFormControlLabel-root": {
            margin: 0,
            flexBasis: { xs: "100%", md: "50%" },
            flexGrow: 0
          }
        }}
      >
        <FormControlLabel
          value="female"
          control={<AnswerSelect label="Sir Templeton" />}
          label=""
        />
        <FormControlLabel
          value="male"
          control={<AnswerSelect label="Faisal Ubayd" />}
          label=""
        />
        <FormControlLabel
          value="other"
          control={<AnswerSelect label="Jonas Munger" />}
          label=""
        />

        <FormControlLabel
          value="o123ther"
          control={<AnswerSelect label="Musa Abubakar" />}
          label=""
        />
      </RadioGroup>
    </Box>
  );
};

export default GamePage;

import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  onClick: () => void;
  questions: number;
}

const CategorySelectCard = (props: Props) => {
  const { title, description, onClick, questions } = props;

  return (
    <Box
      sx={{
        filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10))"
      }}
    >
      <ButtonBase
        onClick={onClick}
        sx={{
          background: (theme) => theme.vars.palette.background.paper,
          clipPath:
            "polygon(12% 0%, 100% 0, 100% calc(100% - 12%), calc(100% - 12%) 100%, 0 100%, 0% 12%)",
          width: "fit-content",
          position: "relative",

          "& .MuiTouchRipple-child": {
            backgroundColor: (theme) =>
              `color-mix(in srgb, ${theme.vars.palette.primary.main} 95%, transparent)`
          },

          "& .title": {
            transition: "all 150ms"
          },

          "&:hover .title": {
            color: (theme) => theme.vars.palette.primary.main
          }
        }}
      >
        <Box
          p={4}
          sx={{
            boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.25)",
            filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10))"
          }}
        >
          <Box
            p={3}
            sx={{
              "& .card": (theme) => ({
                width: { xs: "180px !important", md: "200px !important" },
                height: { xs: "180px !important", md: "200px !important" },
                [theme.getColorSchemeSelector("dark")]: {
                  filter: "invert(1)"
                }
              })
            }}
          >
            <Image
              className="card"
              alt="trivia-category"
              width={200}
              height={200}
              src="/select-image.svg"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            <Typography
              className="title"
              sx={{
                color: "text.primary",
                fontSize: { xs: "1rem", md: "1.5rem " },
                fontStyle: "italic",
                fontWeight: 900,
                textTransform: "uppercase"
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                textTransform: "capitalize",
                color: (theme) =>
                  `color-mix(in srgb, ${theme.vars.palette.text.primary} 25%, transparent)`
              }}
            >
              {description}
            </Typography>
          </Box>

          <Typography
            className="title"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 32,
              height: 40,
              background: (theme) => theme.vars.palette.background.default,
              fontWeight: 700,
              display: "grid",
              placeItems: "center"
            }}
          >
            {questions}
          </Typography>
        </Box>
      </ButtonBase>
    </Box>
  );
};

export default CategorySelectCard;

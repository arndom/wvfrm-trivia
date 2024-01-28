import { Box, Typography, alpha, ButtonBase } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  img: string;
  onClick: () => void;
}

const CategorySelectCard = (props: Props) => {
  const { title, description, img, onClick } = props;

  return (
    <Box
      sx={{
        filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10))"
      }}
    >
      <ButtonBase
        onClick={onClick}
        sx={{
          background: (theme) => theme.palette.background.paper,
          clipPath:
            "polygon(12% 0%, 100% 0, 100% calc(100% - 12%), calc(100% - 12%) 100%, 0 100%, 0% 12%)",
          width: "fit-content",

          "& .MuiTouchRipple-child": {
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.95)
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
            py={3}
            sx={{
              "& .card": {
                width: { xs: "200px !important", md: "308px !important" },
                height: { xs: "200px !important", md: "308px !important" }
              }
            }}
          >
            <Image
              className="card"
              alt="trivia-category"
              width={308}
              height={308}
              src={img}
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
                color: (theme) => alpha(theme.palette.text.primary, 0.25)
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </ButtonBase>
    </Box>
  );
};

export default CategorySelectCard;

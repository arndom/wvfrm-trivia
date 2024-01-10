import { Box, Typography, alpha, ButtonBase } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface Props {
title: string;
description: string;
img: string;
}

const CategorySelectCard = (props: Props) => {
  const { title, description, img } = props;

  return (
    <Box
      component={ButtonBase}
      sx={{
        background: (theme) => theme.palette.background.paper,
        boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.25)",
        clipPath:
          "polygon(12% 0%, 100% 0, 100% calc(100% - 12%), calc(100% - 12%) 100%, 0 100%, 0% 12%)",
        width: "fit-content",

        "& .MuiTouchRipple-child": {
          backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.95),
        },
      }}
    >
      <Box p={4}>
        <Box
          py={3}
          sx={{
            "& .card": {
              width: { xs: "200px !important", md: "308px !important" },
              height: { xs: "200px !important", md: "308px !important" },
            },
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
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem " },
              fontStyle: "italic",
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 500,
              textTransform: "capitalize",
              color: (theme) => alpha(theme.palette.text.primary, 0.25),
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CategorySelectCard
import { Box, Typography, alpha } from '@mui/material'
import React from 'react'

const CategorySelectCard = () => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.paper,
        boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.25)",
        clipPath:
          "polygon(12% 0%, 100% 0, 100% calc(100% - 12%), calc(100% - 12%) 100%, 0 100%, 0% 12%)",
        width: "fit-content",
      }}
    >
      <Box p={4}>
        <Box py={3}>
          <img
            style={{
              width: "308px",
              height: "270px",
              position: "relative",
            }}
            src="https://via.placeholder.com/308x270"
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
              fontSize: 24,
              fontStyle: "italic",
              fontWeight: "900",
              textTransform: "uppercase",
            }}
          >
            Special trivia
          </Typography>

          <Typography
            fontWeight={500}
            fontSize="14px"
            sx={{
              fontSize: 14,
              fontWeight: "500",
              textTransform: "capitalize",
              color: (theme) => alpha(theme.palette.text.primary, 0.25),
            }}
          >
            Based on special guest or event
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CategorySelectCard
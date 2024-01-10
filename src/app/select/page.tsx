"use client"

import LeftCaretIcon from '@/components/icons/left-caret';
import CategorySelectCard from '@/components/ui/category-select-card';
import HomeIntroText from '@/components/ui/home-into-text';
import { Box, alpha } from '@mui/material'
import React from 'react'

const gameCategories = [
  {
    title: "Quick game",
    description: "Randomly selected questions",
    img: "https://via.placeholder.com/308x308"
  },
  {
    title: "Classic game",
    description: "Weekly trivia",
    img: "https://via.placeholder.com/308x308"
  },
  {
    title: "Bonus game",
    description: "Special Guests/events trivia",
    img: "https://via.placeholder.com/308x308"
  },
]
const SelectPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        my: 5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 0.5 }}>
          <LeftCaretIcon />
          <HomeIntroText
            component="p"
            sx={{
              fontSize: { xs: "1rem", md: "1.375rem", xl: "2.125rem" },
              color: (theme) => alpha(theme.palette.text.primary, 0.4),
              letterSpacing: "-1.223px",
            }}
          >
            Home
          </HomeIntroText>
        </Box>

        <HomeIntroText
          component="p"
          sx={{ fontSize: { xs: "2rem", md: "2.75rem", xl: "4.25rem" } }}
        >
          Select Category
        </HomeIntroText>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {gameCategories.map((item) => (
          <CategorySelectCard key={item.title} {...item} />
        ))}
      </Box>
    </Box>
  );
}

export default SelectPage
"use client"

import CategorySelectCard from '@/components/ui/category-select-card';
import HomeIntroText from '@/components/ui/home-into-text';
import { Box } from '@mui/material'
import React from 'react'

const SelectPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "unset", md: "100%" },
        py: { xs:5, md: 0 }
      }}
    >
      <HomeIntroText
        component="p"
        sx={{ fontSize: { xl: "5rem" } }}
      >
        Select Trivia Category
      </HomeIntroText>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <CategorySelectCard />
        <CategorySelectCard />
        <CategorySelectCard />
      </Box>
    </Box>
  );
}

export default SelectPage
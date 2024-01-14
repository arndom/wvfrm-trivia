"use client"

import LeftCaretIcon from '@/components/icons/left-caret';
import BaseDialog from '@/components/ui/base-dialog';
import CategorySelectCard from '@/components/ui/category-select-card';
import HomeIntroText from '@/components/ui/home-into-text';
import { Box, Button, FormControl, InputBase, Switch, Typography, alpha, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.40)' : '#111',
    fontSize: 16,
    padding: '10px 16px',

    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),

    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SelectPage = () => {
  const [openQuickGameDialog, setQuickGameDialog] = useState(false);

  const handleQuickGameDialogClose = () => setQuickGameDialog(false);
  const onOpenQuickGameDialog = () => setQuickGameDialog(true);

  const gameCategories = [
    {
      title: "Quick game",
      description: "Randomly selected questions",
      img: "https://via.placeholder.com/308x308",
      onClick: onOpenQuickGameDialog
    },
    {
      title: "Classic game",
      description: "Weekly trivia",
      img: "https://via.placeholder.com/308x308",
      onClick: onOpenQuickGameDialog
    },
    {
      title: "Bonus game",
      description: "Special Guests/events trivia",
      img: "https://via.placeholder.com/308x308",
      onClick: onOpenQuickGameDialog
    },
  ];

  const step1 = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        alignItems: "center",
      }}
    >
      <HomeIntroText
        sx={{
          fontSize: { xs: "2rem", md: "2.75rem", xl: "3rem" },
          lineHeight: { xs: "2rem", md: "2.75rem", xl: "3rem" },
        }}
      >
        Enter Username
      </HomeIntroText>

      <FormControl variant="standard" fullWidth>
        <StyledInput fullWidth />
      </FormControl>

      <Box sx={{ display: "flex" }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            width: 120,
          }}
        >
          skip
        </Button>
        <Button
          color="secondary"
          variant="contained"
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            width: 120,
            marginLeft: "-18px"
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );

  const step2 = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        alignItems: "center",
      }}
    >
      <HomeIntroText
        sx={{
          fontSize: { xs: "2rem", md: "2.75rem", xl: "3rem" },
          lineHeight: { xs: "2rem", md: "2.75rem", xl: "3rem" },
        }}
      >
        Instruction
      </HomeIntroText>

      <Typography sx={{ textAlign: "center", maxWidth: { xs: "230px", md: "unset" } }}>
        Once the game starts, you&apos;ve got 5 seconds per question.
      </Typography>

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          padding: "10px 20px",
          width: 200,
        }}
      >
        Start
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 5, lg: 0 },
        minHeight: { lg: "inherit" },
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
      </Box>l

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

      <BaseDialog
        open={openQuickGameDialog}
        onClose={handleQuickGameDialogClose}
      >
        {step2}
      </BaseDialog>
    </Box>
  );
}

export default SelectPage
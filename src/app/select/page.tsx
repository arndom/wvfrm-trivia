"use client"

import LeftCaretIcon from '@/components/icons/left-caret';
import { SelectPageInput } from '@/components/ui/select-page-input';
import BaseDialog from '@/components/ui/base-dialog';
import CategorySelectCard from '@/components/ui/category-select-card';
import Headertext from '@/components/ui/header-text';
import { Box, Button, FormControl, Switch, Typography, alpha } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link';

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
      <Headertext
        sx={{
          fontSize: { xs: "2rem", md: "2.75rem", xl: "3rem" },
          lineHeight: { xs: "2rem", md: "2.75rem", xl: "3rem" },
        }}
      >
        Enter Username
      </Headertext>

      <FormControl variant="standard" fullWidth>
        <SelectPageInput fullWidth />
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
      <Headertext
        sx={{
          fontSize: { xs: "2rem", md: "2.75rem", xl: "3rem" },
          lineHeight: { xs: "2rem", md: "2.75rem", xl: "3rem" },
        }}
      >
        Instruction
      </Headertext>

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
        <Box
          component={Link}
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 0.5,
            textDecoration: "none",
          }}
        >
          <LeftCaretIcon />
          <Headertext
            component="p"
            sx={{
              fontSize: { xs: "1rem", md: "1.375rem", xl: "2.125rem" },
              color: (theme) => alpha(theme.palette.text.primary, 0.4),
              letterSpacing: "-1.223px",
            }}
          >
            Home
          </Headertext>
        </Box>

        <Headertext
          component="p"
          sx={{ fontSize: { xs: "2rem", md: "2.75rem", xl: "4.25rem" } }}
        >
          Select Category
        </Headertext>
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
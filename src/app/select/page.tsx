"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box } from "@mui/material";
import BaseDialog from "@/components/ui/base-dialog";
import CategorySelectCard from "@/components/ui/pages/select/category-select-card";
import Headertext from "@/components/ui/header-text";
import Step1 from "@/components/ui/pages/select/step1";
import Step2 from "@/components/ui/pages/select/step2";
import LeftCaretIcon from "@/components/icons/left-caret";
import { checkVisit, getFirstTimeVisit, getQuestions } from "@/utils/firebase";

const SelectPage = () => {
  const [openQuickGameDialog, setQuickGameDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleQuickGameDialogClose = () => setQuickGameDialog(false);
  const onOpenQuickGameDialog = () => setQuickGameDialog(true);
  const nextStep = () => setCurrentStep((i) => ++i);

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
    }
  ];

  useEffect(() => {
    checkVisit();
    const firstTimeVisit = getFirstTimeVisit();

    if (!firstTimeVisit && currentStep === 0) {
      nextStep();
    }
  }, [currentStep]);

  const step1 = <Step1 skipHandler={nextStep} continueHandler={nextStep} />;
  const step2 = <Step2 startHandler={() => getQuestions("classic")} />;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 5, lg: 0 },
        minHeight: { lg: "inherit" }
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          component={Link}
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 0.5
          }}
        >
          <LeftCaretIcon />
          <Headertext
            component="p"
            sx={{
              fontSize: { xs: "1rem", md: "1.375rem", xl: "2.125rem" },
              color: (theme) =>
                `color-mix(in srgb, ${theme.vars.palette.text.primary} 40%, transparent)`,
              letterSpacing: "-1.223px"
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
          justifyContent: "center"
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
        {currentStep === 0 ? step1 : step2}
      </BaseDialog>
    </Box>
  );
};

export default SelectPage;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box } from "@mui/material";
import BaseDialog from "@/components/ui/base-dialog";
import CategorySelectCard from "@/components/ui/pages/select/category-select-card";
import Headertext from "@/components/ui/header-text";
import Instructions from "@/components/ui/pages/select/instructions";
import LeftCaretIcon from "@/components/icons/left-caret";
import { getQuestions } from "@/utils/firebase";
import { checkVisit, getFirstTimeVisit } from "@/utils/helpers";
import { useDispatch } from "react-redux";
import { setQuestions } from "@/context/game/redux";
import { useRouter } from "next/navigation";
import { GameModeT } from "@/context/types";

const SelectPage = () => {
  const [openGameDialog, setGameDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [gameMode, setGameMode] = useState<GameModeT>("classic");

  const nextStep = () => setCurrentStep((i) => ++i);
  const handleGameDialogClose = () => setGameDialog(false);
  const onOpenGameDialog = (mode: GameModeT) => {
    setGameDialog(true);
    setGameMode(mode);
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const gameCategories = [
    {
      title: "Quick game",
      description: "Randomly selected questions",
      onClick: () => onOpenGameDialog("quick"),
      questions: 3
    },
    {
      title: "Classic game",
      description: "Weekly trivia",
      onClick: () => onOpenGameDialog("classic"),
      questions: 10
    }
  ];

  // Show username entry for new users
  useEffect(() => {
    checkVisit();
    const firstTimeVisit = getFirstTimeVisit();

    if (!firstTimeVisit && currentStep === 0) {
      nextStep();
    }
  }, [currentStep]);

  const handleSetup = async () => {
    const _questions = await getQuestions(gameMode);
    await dispatch(setQuestions(_questions));

    router.push("/game");
    handleGameDialogClose();
  };

  const instructions = <Instructions callback={handleSetup} mode={gameMode} />;

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

      <BaseDialog open={openGameDialog} onClose={handleGameDialogClose}>
        {instructions}
      </BaseDialog>
    </Box>
  );
};

export default SelectPage;

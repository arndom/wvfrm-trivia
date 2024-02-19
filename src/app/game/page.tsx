"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Box, FormControlLabel, RadioGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  incrementUserPoints,
  updateCurrentGamePoints
} from "@/context/game/redux";
import Headertext from "@/components/ui/header-text";
import { AnswerSelect } from "@/components/ui/pages/game/answer-select";
import { useRouter } from "next/navigation";
import { POINTS_PER_QUESTION, SECS_PER_QUESTION } from "@/context/types";
import { updateUserGameStats } from "@/utils/firebase";

const GamePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { questions, user: _user } = useSelector(
    (state: RootState) => state.game
  );

  const [rightChoiceSound, setRightChoiceSound] =
    useState<HTMLAudioElement | null>(null);
  const [wrongChoiceSound, setWrongChoiceSound] =
    useState<HTMLAudioElement | null>(null);
  const [tickSound, setTickSound] = useState<HTMLAudioElement | null>(null);
  const [user] = useState(_user);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(SECS_PER_QUESTION);
  const [points, setPoints] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [playing, setPlaying] = useState(true);

  const handleNextQuestion = useCallback(() => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setTimer(SECS_PER_QUESTION);

      // Reset selected answer for the next question
      setSelectedAnswer(null);
    } else {
      setPlaying(false);
    }
  }, [currentQuestionIndex, questions.length]);

  // Init sounds
  useEffect(() => {
    setRightChoiceSound(new Audio("sounds/correct.mp3"));
    setWrongChoiceSound(new Audio("sounds/wrong.mp3"));
    setTickSound(new Audio("sounds/tick.mp3"));
  }, []);

  // If there are no questions, navigate to the select page
  useEffect(() => {
    if (questions.length === 0) {
      router.push("/select");
    }
  }, [questions, router]);

  // Update countdown
  useEffect(() => {
    if (timer > 0 && tickSound && timer < SECS_PER_QUESTION) {
      tickSound.volume = 0.02;
      tickSound.play();
    }

    if (timer === 0) {
      !selectedAnswer && wrongChoiceSound?.play();

      // Move to the next question when timer reaches 0
      handleNextQuestion();
    }

    const timeoutId = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [timer, handleNextQuestion, wrongChoiceSound, tickSound, selectedAnswer]);

  // Reset timer and set points to 0 when the component mounts or when questions change
  useEffect(() => {
    setTimer(SECS_PER_QUESTION);
    setPoints(0);
  }, [questions]);

  // On game end
  // Update current game points
  // Update local user
  useEffect(() => {
    if (playing) {
      return;
    }

    dispatch(updateCurrentGamePoints(points));
    dispatch(incrementUserPoints(points));
    router.push("/end");
  }, [playing, points, dispatch, router]);

  // Update firebase user on game end
  useEffect(() => {
    if (playing) return;
    if (!user) return;

    updateUserGameStats(user.uid, points);
  }, [dispatch, playing, points, user]);

  const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _selectedAnswer = (event.target as HTMLInputElement).value;
    setSelectedAnswer(_selectedAnswer);
  };

  // Handle Choice selection
  useEffect(() => {
    if (selectedAnswer) {
      const handleChoice = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion.answer === selectedAnswer) {
          rightChoiceSound?.play();
          setPoints((prevPoints) => prevPoints + POINTS_PER_QUESTION);
        } else {
          wrongChoiceSound?.play();
        }

        // Move to the next question
        handleNextQuestion();
      };

      // In a timeout to allow user see their choice before moving on
      setTimeout(handleChoice, 100);
    }
  }, [
    handleNextQuestion,
    selectedAnswer,
    currentQuestionIndex,
    questions,
    rightChoiceSound,
    wrongChoiceSound
  ]);

  if (questions.length === 0) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 5, lg: 0 },
        minHeight: { lg: "inherit" }
      }}
    >
      <Headertext component="p">
        00:
        <Headertext component="span" color="primary">
          {timer <= 9 && 0}
          {timer}
        </Headertext>
        <Headertext
          component="span"
          sx={{ fontSize: { xs: "2rem", md: "2.75rem", xl: "4.25rem" } }}
        >
          sec
        </Headertext>
      </Headertext>

      <Box
        sx={{
          mt: 2,
          mb: { xs: 4, md: 6 },
          background: (theme) => theme.vars.palette.background.default,
          maxWidth: "md",
          borderLeft: (theme) => ({
            xs: "none",
            md: `5px solid ${theme.vars.palette.primary.main}`
          }),
          borderTop: (theme) => ({
            xs: `3.75px solid ${theme.vars.palette.primary.main}`,
            md: "none"
          })
        }}
      >
        <Typography
          sx={{
            p: { xs: 3, md: 4 },
            fontWeight: 900,
            textTransform: "capitalize",
            textAlign: "center",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            position: "relative"
          }}
        >
          <Typography
            color="primary"
            sx={{
              fontWeight: 700,
              position: "absolute",
              bottom: 4,
              right: 8
            }}
          >
            {`${currentQuestionIndex + 1} / ${questions.length}`}
          </Typography>
          {questions[currentQuestionIndex]?.question}
        </Typography>
      </Box>

      <RadioGroup
        value={selectedAnswer}
        onChange={handleAnswerSelect}
        aria-labelledby=""
        name=""
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: "md",

          "& .MuiRadio-root": {
            width: "100%"
          },

          "& .MuiFormControlLabel-root": {
            margin: 0,
            flexBasis: { xs: "100%", md: "50%" },
            flexGrow: 0
          }
        }}
      >
        {questions[currentQuestionIndex]?.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<AnswerSelect label={option} />}
            label=""
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default GamePage;

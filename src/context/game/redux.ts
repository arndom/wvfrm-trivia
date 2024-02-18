import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { GameT, QuestionT, UserT, init } from "../types";

const gameSlice = createSlice({
  name: "game",
  initialState: init as GameT,
  reducers: {
    updateQuestions(state, action: PayloadAction<QuestionT[]>) {
      state.questions = action.payload;
    },

    updatePoints(state, action: PayloadAction<number>) {
      state.points = action.payload;
    },

    updateUser(state, action: PayloadAction<UserT>) {
      state.user = action.payload;
    },

    resetGame(state) {
      state.points = 0;
      state.questions = [];
    }
  }
});

export const { updateQuestions, updatePoints, updateUser, resetGame } =
  gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

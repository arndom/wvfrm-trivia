import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { GameT, QuestionT, UserT, init } from "../types";

const gameSlice = createSlice({
  name: "game",
  initialState: init as GameT,
  reducers: {
    setQuestions(state, action: PayloadAction<QuestionT[]>) {
      state.questions = action.payload;
    },

    updateUser(state, action: PayloadAction<UserT>) {
      state.user = action.payload;
    },

    updateLocalUserGameStats(state, action: PayloadAction<number>) {
      state.points = action.payload;
      if (state.user) {
        state.user.points += action.payload;
        state.user.games += 1;
      }
    },

    updateLocalUsername(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.name = action.payload;
      }
    },

    setLeaderboard(state, action: PayloadAction<UserT[]>) {
      state.leaderboard = action.payload;
    },

    resetGame(state) {
      state.points = 0;
      state.questions = [];
    }
  }
});

export const {
  setQuestions,
  updateLocalUserGameStats,
  updateUser,
  updateLocalUsername,
  setLeaderboard,
  resetGame
} = gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

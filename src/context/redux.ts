import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Game, QuestionT, init } from "./types";

const gameSlice = createSlice({
  name: "game",
  initialState: init as Game,
  reducers: {
    updateQuestions(state, action: PayloadAction<QuestionT[]>) {
      state.questions = action.payload;
    }
  }
});

export const { updateQuestions } = gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

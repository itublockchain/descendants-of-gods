import cardSlicer from "store/reducers/cards";
import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "store/reducers/game";

export const store = configureStore({
  reducer: {
    game: gameSlice,
    cards: cardSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

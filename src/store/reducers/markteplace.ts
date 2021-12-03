import { LAYOUT } from "common/constants/layout";
import { createSlice } from "@reduxjs/toolkit";

type GameState = {
  layout: LAYOUT.collapsed | LAYOUT.expanded;
  table: {
    rows: number;
    columns: number;
  };
};

const initialState: GameState = {
  layout: LAYOUT.collapsed,
  table: {
    rows: 5,
    columns: 5,
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = gameSlice.actions;

export default gameSlice.reducer;

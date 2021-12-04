import { LAYOUT } from "common/constants/layout";
import { createSlice } from "@reduxjs/toolkit";

type GameState = {
  layout: LAYOUT.collapsed | LAYOUT.expanded;
  table: {
    rows: number;
    columns: number;
  };
  selectedCards: Array<any>;
  stage: "SelectMap" | "SelectCard" | "MatchPlayers" | "InGame";
};

const initialState: GameState = {
  layout: LAYOUT.collapsed,
  table: {
    rows: 5,
    columns: 5
  },
  selectedCards: [],
  stage: "SelectMap"
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setStage(state, action) {
      const payload = action.payload;
      if (payload === "SelectMap") {
        state.stage = "SelectMap";
      } else if (payload === "SelectCards") {
        state.stage = "SelectCard";
      } else if (payload === "MatchPlayers") {
        state.stage = "MatchPlayers";
      } else if (payload === "InGame") {
        state.stage = "InGame";
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { setStage } = gameSlice.actions;

export default gameSlice.reducer;

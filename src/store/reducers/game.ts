import { LAYOUT } from "common/constants/layout";
import { createSlice } from "@reduxjs/toolkit";

export enum STAGES {
  "SelectMap" = 0,
  "SelectCard" = 1,
  "MatchPlayers" = 2,
  "InGame" = 3
}

type GameState = {
  layout: LAYOUT.collapsed | LAYOUT.expanded;
  table: {
    rows: number;
    columns: number;
  };
  selectedCards: Array<any>;
  stage: STAGES;
};

const initialState: GameState = {
  layout: LAYOUT.collapsed,
  table: {
    rows: 5,
    columns: 5
  },
  selectedCards: [],
  stage: STAGES.SelectMap
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setStage(state, action) {
      const payload = action.payload;
      state.stage = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setStage } = gameSlice.actions;

export default gameSlice.reducer;

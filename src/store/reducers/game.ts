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
  selectedCards: any;
  enemyCards: any;
  stage: STAGES;
  playedCards: any;
  moveStack: any;
  cellInfo: any;
  energy: number;
};

const initialState: GameState = {
  layout: LAYOUT.collapsed,
  table: {
    rows: 5,
    columns: 5
  },
  playedCards: [],
  selectedCards: [0, 1, 2, 3, 4],
  stage: STAGES.InGame,
  moveStack: [],
  cellInfo: [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ],
  energy: 3,
  enemyCards: []
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setStage(state, action) {
      const payload = action.payload;
      state.stage = payload;
    },
    setSelectedCards(state, action) {
      state.selectedCards = action.payload;
    },
    setPlayedCards: (state, action) => {
      state.playedCards = action.payload;
    },
    playCard: (state, action) => {
      const { i, j, cardId } = action.payload;
      if (!state.playedCards.includes(i)) {
        state.playedCards.push(cardId);
        state.moveStack.push({
          origin: [-1, -1],
          target: [i, j],
          cardId: cardId
        });
      } else {
      }
    },
    updateCell: (state, action) => {
      const { i, j, item } = action.payload;
      state.cellInfo[i][j] = item;
    },
    setCell: (state, action) => {
      state.cellInfo = action.payload;
    },
    setEnemyCards(state, action) {
      state.enemyCards = action.payload;
    },
    setMoveStack: (state, action) => {
      state.moveStack = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setStage,
  setSelectedCards,
  setCell,
  setEnemyCards,
  updateCell,
  playCard,
  setMoveStack
} = gameSlice.actions;

export default gameSlice.reducer;

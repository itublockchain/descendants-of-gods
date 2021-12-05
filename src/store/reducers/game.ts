import { LAYOUT } from "common/constants/layout";
import { createSlice } from "@reduxjs/toolkit";
import { CARD } from "store/reducers/cards";

export enum STAGES {
  "SelectMap" = 0,
  "SelectCard" = 1,
  "MatchPlayers" = 2,
  "InGame" = 3
}

const tab = sessionStorage.getItem("tab");

declare const window: Window & any;
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
  playerCards: any;
  order: any;
};

const initialState: GameState = {
  layout: LAYOUT.collapsed,
  table: {
    rows: 5,
    columns: 5
  },
  selectedCards: [0, 1, 2, 3, 4],
  stage: STAGES.SelectMap,
  moveStack: [],
  cellInfo: [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ],
  energy: 3,
  playedCards: [],
  playerCards: [
    { id: "0", card: CARD[0], tab },
    { id: "1", card: CARD[1], tab },
    { id: "2", card: CARD[2], tab },
    { id: "3", card: CARD[3], tab },
    { id: "4", card: CARD[4], tab }
  ],
  enemyCards: [
    { id: "0", card: CARD[0], tab },
    { id: "1", card: CARD[1], tab },
    { id: "2", card: CARD[2], tab },
    { id: "3", card: CARD[3], tab },
    { id: "4", card: CARD[4], tab }
  ],
  order: tab
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
      const { id } = action.payload;
      if (state.playedCards.includes(id)) {
        state.playedCards = state.playedCards.filter(
          (item: any) => item !== id
        );
      } else {
        state.playedCards.push(id);
      }
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
      }
    },
    updateCell: (state, action) => {
      const { i, j, item } = action.payload;
      console.log(i, j, item);

      state.cellInfo[i][j] = item;

      window?.socket.emit("move", {
        table: state.cellInfo,
        order: state.order
      });
    },
    setCell: (state, action) => {
      state.cellInfo = action.payload;
    },
    setEnemyCards(state, action) {
      state.enemyCards = action.payload;
    },
    setMoveStack: (state, action) => {
      state.moveStack = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
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
  setMoveStack,
  setPlayedCards,
  setOrder
} = gameSlice.actions;

export default gameSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const CARD = {
  "0": "WARRIOR",
  "1": "ARCHER",
  "2": "WIZARD",
  "3": "HEALER",
  "4": "TITAN"
};

type CardState = {
  selectedCards?: any;
  user: any;
  enemy: any;
};

const initialState: CardState = {
  selectedCards: {},
  user: {
    deck: [0, 1, 1, 1, 2, 3]
  },
  enemy: {
    deck: [0, 1, 1, 1, 2, 3]
  }
};

export const cardSlicer = createSlice({
  name: "cards",
  initialState,
  reducers: {}
});

export const {} = cardSlicer.actions;

export default cardSlicer.reducer;

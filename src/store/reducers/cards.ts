import { createSlice } from "@reduxjs/toolkit";

const CARDS = {
  0: "Test 0",
  1: "Test 1",
  2: "Test 2",
  3: "Test 3",
  4: "Test 4",
  5: "Test 5",
};

type CardState = {
  selectedCards?: any;
  user: any;
  enemy: any;
};

const initialState: CardState = {
  selectedCards: {},
  user: {
    deck: [0, 1, 1, 1, 2, 3],
  },
  enemy: {
    deck: [0, 1, 1, 1, 2, 3],
  },
};

export const cardSlicer = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export const {} = cardSlicer.actions;

export default cardSlicer.reducer;

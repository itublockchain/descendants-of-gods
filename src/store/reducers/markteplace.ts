import { createSlice } from "@reduxjs/toolkit";
import { CARD } from "store/reducers/cards";

type MarketPlaceState = {
  cards: string[];
  selected: string[];
};

const initialState: MarketPlaceState = {
  cards: ["Warrior", "Archer", "Wizard", "Healer", "Titan"],
  selected: [],
};

export const marketPlace = createSlice({
  name: "market",
  initialState,
  reducers: {
    toggleSelect: (state, action) => {
      const payload = action.payload;
      if (state.selected.includes(payload)) {
        state.selected = state.selected.filter((item) => item !== payload);
      } else {
        state.selected.push(payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSelect } = marketPlace.actions;

export default marketPlace.reducer;

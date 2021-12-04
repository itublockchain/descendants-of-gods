import { createSlice } from "@reduxjs/toolkit";
import Warrior from "assets/cards/Warrior.png";
import Archer from "assets/cards/Archer.png";
import Healer from "assets/cards/Healer.png";
import Wizard from "assets/cards/Wizard.png";
import Titan from "assets/cards/Titan.png";

export type CARDTYPES = "0" | "1" | "2" | "3" | "4";

export const CARD = {
  "0": {
    name: "WARRIOR",
    img: Warrior
  },
  "1": { name: "ARCHER", img: Archer },
  "2": { name: "WIZARD", img: Wizard },
  "3": { name: "HEALER", img: Healer },
  "4": { name: "TITAN", img: Titan }
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

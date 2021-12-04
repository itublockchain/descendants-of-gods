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
    img: Warrior,
    rangeX: 1,
    rangeY: 1,
    deployEnergy: 1,
    health: 4,
    points: 2
  },
  "1": {
    name: "ARCHER",
    img: Archer,
    rangeX: 3,
    rangeY: 3,
    deployEnergy: 1,
    health: 2,
    points: 1
  },
  "2": {
    name: "WIZARD",
    img: Wizard,
    rangeX: 2,
    rangeY: 2,
    deployEnergy: 2,
    health: 2,
    points: 3
  },
  "3": {
    name: "HEALER",
    img: Healer,
    rangeX: 2,
    rangeY: 2,
    deployEnergy: 3,
    health: 4,
    points: 2
  },
  "4": {
    name: "TITAN",
    img: Titan,
    rangeX: 1,
    rangeY: 1,
    deployEnergy: 4,
    health: 5,
    points: 3
  }
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

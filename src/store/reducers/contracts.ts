import { createSlice } from "@reduxjs/toolkit";

const CONTRACTS = {
  Token: "",
  Game: "",
  PlayerCard: "",
  FXP: "",
  FLASH: "",
  BAORD: "",
  MatchMaker: "",
};

type ContractState = {
  Token?: any;
  Game?: any;
  FXP?: any;
  PlayerCard?: any;
  BOARD?: any;
  FLASH?: any;
  MatchMaker?: any;
};

const initialState: ContractState = {
  Token: null,
  Game: null,
  FXP: null,
  PlayerCard: null,
  BOARD: null,
  FLASH: null,
  MatchMaker: null,
};

export const contractSlicer = createSlice({
  name: "contracts",
  initialState,
  reducers: {},
});

export const {} = contractSlicer.actions;

export default contractSlicer.reducer;

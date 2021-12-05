import { createSlice } from "@reduxjs/toolkit";

type ContractState = {
  GodContract: any;
  BoardContract: any;
  FlashContract: any;
  MarketplaceContract: any;
  MatchMakerContract: any;
  ArenaContract: any;
  BiliraContract: any;
  SonsContract: any;
  XpContract: any;
  ClashContract: any;
};

const initialState: ContractState = {
  GodContract: null,
  BoardContract: null,
  FlashContract: null,
  MarketplaceContract: null,
  MatchMakerContract: null,
  ArenaContract: null,
  BiliraContract: null,
  SonsContract: null,
  XpContract: null,
  ClashContract: null
};

export const contractSlicer = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    setGodContract(state, action) {
      state.GodContract = action.payload;
    },
    setBoardContract(state, action) {
      state.BoardContract = action.payload;
    },
    setFlashContract(state, action) {
      state.FlashContract = action.payload;
    },
    setMarketplaceContract(state, action) {
      state.MarketplaceContract = action.payload;
    },
    setMatchMakerContract(state, action) {
      state.MatchMakerContract = action.payload;
    },
    setArenaContract(state, action) {
      state.ArenaContract = action.payload;
    },
    setBiliraContract(state, action) {
      state.BiliraContract = action.payload;
    },
    setSonsContract(state, action) {
      state.SonsContract = action.payload;
    },
    setXpContract(state, action) {
      state.XpContract = action.payload;
    },
    setClashContract(state, action) {
      state.ClashContract = action.payload;
    },
    setContractData(state, action) {
      state.GodContract = action.payload.GodContract;
      state.BoardContract = action.payload.BoardContract;
      state.FlashContract = action.payload.FlashContract;
      state.MarketplaceContract = action.payload.MarketplaceContract;
      state.MatchMakerContract = action.payload.MatchMakerContract;
      state.ArenaContract = action.payload.ArenaContract;
      state.BiliraContract = action.payload.BiliraContract;
      state.SonsContract = action.payload.SonsContract;
      state.XpContract = action.payload.XpContract;
    }
  }
});

export const {
  setGodContract,
  setBoardContract,
  setFlashContract,
  setMarketplaceContract,
  setMatchMakerContract,
  setArenaContract,
  setBiliraContract,
  setSonsContract,
  setXpContract,
  setContractData,
  setClashContract
} = contractSlicer.actions;

export default contractSlicer.reducer;

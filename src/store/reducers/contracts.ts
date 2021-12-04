import { createSlice } from "@reduxjs/toolkit";

type ContractState = {
  TokenContract?: any;
  GameContract?: any;
  FXPContract?: any;
  PlayerCardContract?: any;
  BoardContract?: any;
  FlashContract?: any;
  MatchMakerContract?: any;
  GodContract?: any;
  MarketplaceContract?: any;
};

const initialState: ContractState = {
  TokenContract: null,
  GameContract: null,
  FXPContract: null,
  PlayerCardContract: null,
  BoardContract: null,
  FlashContract: null,
  MatchMakerContract: null,
  GodContract: null,
  MarketplaceContract: null,
};

export const contractSlicer = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    setTokenContract(state, action) {
      state.TokenContract = action.payload;
    },
    setGameContract(state, action) {
      state.GameContract = action.payload;
    },
    setFXPContract(state, action) {
      state.FXPContract = action.payload;
    },
    setPlayerCardContract(state, action) {
      state.PlayerCardContract = action.payload;
    },
    setBoardContract(state, action) {
      state.BoardContract = action.payload;
    },
    setFlashContract(state, action) {
      state.FlashContract = action.payload;
    },
    setMatchMakerContract(state, action) {
      state.MatchMakerContract = action.payload;
    },
    setGodContract(state, action) {
      state.GodContract = action.payload;
    },
    setMarketplaceContract(state, action) {
      state.MarketplaceContract = action.payload;
    },
    setContractData(state, action) {
      //state.TokenContract = action.payload.TokenContract;
      //state.GameContract = action.payload.GameContract;
      //state.FXPContract = action.payload.FXPContract;
      //state.PlayerCardContract = action.payload.PlayerCardContract;
      state.BoardContract = action.payload.BOARDContract;
      state.FlashContract = action.payload.FLASHContract;
      state.GodContract = action.payload.GodContract;
      state.MarketplaceContract = action.payload.MarketplaceContract;
      //state.MatchMakerContract = action.payload.MatchMakerContract;
    },
  },
});

export const {
  setTokenContract,
  setGameContract,
  setFXPContract,
  setPlayerCardContract,
  setBoardContract,
  setFlashContract,
  setMatchMakerContract,
  setContractData,
} = contractSlicer.actions;

export default contractSlicer.reducer;

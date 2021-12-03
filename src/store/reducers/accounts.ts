// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  signedIn: null,
  provider: null,
  signer: null,
  address: null,
};

export const accountSlicer = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    signedIn(state, action) {
      state.signedIn = action.payload;
    },
    setProvider(state, action) {
      state.provider = action.payload;
    },
    setSigner(state, action) {
      state.signer = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setAccountData(state, action) {
      const { address, provider, signedIn } = action.payload;
      state.address = address;
      state.provider = provider;
      state.signedIn = signedIn;
    },
  },
});

export const { signedIn, setProvider, setSigner, setAddress, setAccountData } =
  accountSlicer.actions;

export default accountSlicer.reducer;

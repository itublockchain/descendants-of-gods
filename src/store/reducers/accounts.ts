// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    signedIn: null,
    provider: null,
    signer: null
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
        }
    }
});

export const {
    signedIn,
    setProvider,
    setSigner
} = accountSlicer.actions;

export default accountSlicer.reducer;

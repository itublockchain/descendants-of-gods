// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    signedIn: null
};


export const accountSlicer = createSlice({
    name: "accounts",
    initialState,
    reducers: {
        signedIn(state, action) {
            state.signedIn = action.payload;
        }
    }
});

export const {
    signedIn
} = accountSlicer.actions;

export default accountSlicer.reducer;

// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    signedIn: false
};


export const accountSlicer = createSlice({
    name: "accounts",
    initialState,
    reducers: {
        signIn(state) {
            state.signedIn = true;
        }
    }
});

export const {
    signIn
} = accountSlicer.actions;

export default accountSlicer.reducer;

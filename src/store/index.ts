import cardSlicer from "store/reducers/cards";
import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "store/reducers/game";
import contractSlice from "store/reducers/contracts";
import accounts from "store/reducers/accounts";

export const store = configureStore({
    reducer: {
        game: gameSlice,
        cards: cardSlicer,
        account: accounts,
    },
    middleware: (getDefaultMiddleware) => {
        const customizedMiddleware = getDefaultMiddleware({
            serializableCheck: false
        });
        return customizedMiddleware;
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

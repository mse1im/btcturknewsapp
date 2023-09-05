import { configureStore } from "@reduxjs/toolkit";
import readSlice from "./readSlice";

export const store = configureStore({
    reducer:readSlice
})

export type DispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;
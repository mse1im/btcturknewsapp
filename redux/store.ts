import { configureStore } from "@reduxjs/toolkit";
import readDetailSlice from "./readDetailSlice";
import readCategorySlice from "./readCategorySlice";


export const store = configureStore({
    reducer: {
        readDetailSlice,
        readCategorySlice
    }
})

export type DispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;
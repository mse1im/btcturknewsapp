import { createSlice } from "@reduxjs/toolkit"

type StateType = {
    list: string | null | undefined
}

const initialState:StateType = {
    list: typeof window !== 'undefined' ? (localStorage.getItem('readDetailList') ?? '') : null
}

const detailReadSlice = createSlice({
    name: 'list',
    initialState,
    reducers:{
        toggle:(state,{payload}) => {
            if(state.list === payload){
                if (typeof window !== "undefined") {
                    localStorage.removeItem('readDetailList');
                }
                state.list = '';
            }else {
                if (typeof window !== "undefined") {
                    localStorage.setItem("readDetailList", payload);
                }
                state.list = payload;
            }
        }
    }
})

export const { toggle } = detailReadSlice.actions;
export default detailReadSlice.reducer;
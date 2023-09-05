import { createSlice } from "@reduxjs/toolkit"

type StateType = {
    list: string[] | null
}

const initialState:StateType = {
    list: typeof window !== 'undefined' ? (JSON.parse(localStorage.getItem('readList')!) ?? '') : null
}

const readCategorySlice = createSlice({
    name: 'list',
    initialState,
    reducers:{
        toggleCategory:(state,{payload}) => {
            if(state.list?.includes(payload)){
                state.list = state.list.filter(item => item != payload);
            }else {
                state.list?.push(payload);
            }
            if (typeof window !== "undefined") {
                localStorage.setItem("readList", JSON.stringify(state.list));
            }
        }
    }
})

export const { toggleCategory } = readCategorySlice.actions;
export default readCategorySlice.reducer;
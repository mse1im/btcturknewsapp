import { createSlice } from "@reduxjs/toolkit"

type StateType = {
    list: string[] | null
}

const initialState:StateType = {
    list: JSON.parse(localStorage.getItem('readList')!) ?? []
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
            localStorage.setItem("readList", JSON.stringify(state.list));
        }
    }
})

export const { toggleCategory } = readCategorySlice.actions;
export default readCategorySlice.reducer;
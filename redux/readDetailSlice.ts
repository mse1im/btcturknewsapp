import { createSlice } from "@reduxjs/toolkit"

type StateType = {
    list: string | null
}

const initialState:StateType = {
    list: localStorage.getItem('readDetailList') ?? ''
}

const detailReadSlice = createSlice({
    name: 'list',
    initialState,
    reducers:{
        toggle:(state,{payload}) => {
            if(state.list === payload){
                localStorage.removeItem('readDetailList');
                state.list = '';
            }else {
                localStorage.setItem("readDetailList", payload);
                state.list = payload;
            }
        }
    }
})

export const { toggle } = detailReadSlice.actions;
export default detailReadSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type StateType = {
    list: string[]
}

const initialState:StateType = {
    list: []
}

const readSlice = createSlice({
    name: 'list',
    initialState,
    reducers:{
        toggle:(state,action:PayloadAction<string[]>) => {
            if(state.list.some(item => action.payload.includes(item))){
                state.list = state.list.filter(item => !action.payload.includes(item));
            }else {
                state.list.push(...action.payload);
            }
        }
    }
})

export default readSlice.reducer;
export const { toggle } = readSlice.actions;
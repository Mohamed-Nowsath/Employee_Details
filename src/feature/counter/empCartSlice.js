import { createSlice } from "@reduxjs/toolkit";

export const empCartSlice=createSlice({
    name : 'empCart',
    initialState:[],
    reducers:{
        remove(state,action){
            return  state.filter(
                (empID)=>empID.id !== action.payload
            )
        },
    }
});

export const {add ,remove} =empCartSlice.actions;
export default empCartSlice.reducer; 
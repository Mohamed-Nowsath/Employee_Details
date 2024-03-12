import {configureStore} from "@reduxjs/toolkit";
// import counterReducer from '../feature/counter/counterSlice'
import counterSlice from "../feature/counter/counterSlice";
import empCartSlice from "../feature/counter/empCartSlice";

export const store=configureStore({
    reducer:{
         counter : counterSlice,
         empCart : empCartSlice,
    }
})


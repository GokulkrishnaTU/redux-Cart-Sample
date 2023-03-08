import { configureStore } from "@reduxjs/toolkit";
import conterSlice from "../features/conterSlice";


export const store = configureStore({
    reducer:{
        counter :conterSlice
        
    }
})
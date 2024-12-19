import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./fetchMovieSlicer"
import copyTextReducer from "./copyText";


export const store = configureStore({
    reducer:{
        fetchMovie: movieReducer,
        copyText: copyTextReducer
    }
    
})
import {combineReducers , configureStore } from "@reduxjs/toolkit";
import playerReducer from "@/redux/features/playerSlice"
import shazamReducer from "@/redux/shazam/shazam"

const rootReducer = combineReducers({
  player: playerReducer,
  //add all your reducers here
  shazam : shazamReducer,
},);

const store = configureStore({
  reducer : rootReducer,
})

export default store;
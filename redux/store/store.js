import {combineReducers , configureStore } from "@reduxjs/toolkit";
import playerReducer from "@/redux/features/playerSlice"

const rootReducer = combineReducers({
  player: playerReducer,
  //add all your reducers here
},);

const store = configureStore({
  reducer : rootReducer,
})

export default store;
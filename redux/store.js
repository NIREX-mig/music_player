"use client";
import {combineReducers , configureStore } from "@reduxjs/toolkit";
import playerReducer from "@/redux/features/playerSlice"
import searchReducer from "@/redux/features/searchSlice"
import { shazamApi } from "@/redux/shazam/shazam"

const rootReducer = combineReducers({
  [shazamApi.reducerPath]: shazamApi.reducer,
  player: playerReducer,
  search : searchReducer
},);

const store = configureStore({
  reducer : rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware),
})

export default store;
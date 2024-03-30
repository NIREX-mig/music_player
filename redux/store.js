"use client";
import {combineReducers , configureStore } from "@reduxjs/toolkit";
import playerReducer from "@/redux/features/playerSlice"
import globalReducer from "@/redux/features/globalSlice"
import { shazamApi } from "@/redux/shazam/shazam"

const rootReducer = combineReducers({
  [shazamApi.reducerPath]: shazamApi.reducer,
  player: playerReducer,
  global : globalReducer,
  
},);

const store = configureStore({
  reducer : rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware),
})

export default store;
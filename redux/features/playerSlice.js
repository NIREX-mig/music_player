"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlay : false,
  currentSong : [],
  
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = playerSlice.actions

export default playerSlice.reducer;
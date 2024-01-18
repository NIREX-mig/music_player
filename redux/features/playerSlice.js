"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlay : false,
  isMusicPlayerOpen : false,
  activeSong : {},
  currentSong : [],
  currentIndex : 0,
  
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setIsPlay : (state,action ) =>{
      state.isPlay = action.payload;
      state.isMusicPlayerOpen = true;
    },
    setCurrentSong : (state, action ) =>{
      state.currentSong = action.payload;
    },
    setActiveSong : (state, action ) =>{
      state.activeSong = action.payload;
    },
    nextSong : () =>{

    },
    
    previousSong : () =>{

    }
  },
});

export const { setIsPlay,setCurrentSong,setActiveSong, nextSong, previousSong } = playerSlice.actions

export default playerSlice.reducer;
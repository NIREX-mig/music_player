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
    setcurrentIndex : (state, action ) =>{
      state.currentIndex = action.payload;
    },
    nextSong : (state) =>{
      if(state.currentIndex < state.currentSong.length - 1 ){
        state.activeSong = state.currentSong[state.currentIndex+=1];
      }
    },
    previousSong : (state) =>{
      if(state.currentIndex > 0 ){
        state.activeSong = state.currentSong[state.currentIndex-=1];
      }
    }
  },
});

export const { setIsPlay,setCurrentSong , setcurrentIndex,setActiveSong, nextSong, previousSong } = playerSlice.actions

export default playerSlice.reducer;
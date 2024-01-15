"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue : "",
  isTyping : true,
  isMenuOpen : false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSearchValue : (state, action) =>{
        state.searchValue = action.payload;
    },
    setTyping : (state,action) =>{
      state.isTyping = action.payload;
    },
    setIsMenuOpen : (state, action) =>{
      state.isMenuOpen = action.payload;
    }
  },
});

export const {setSearchValue, setTyping, setIsMenuOpen } = globalSlice.actions

export default globalSlice.reducer;
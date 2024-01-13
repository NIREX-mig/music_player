"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue : "",
  isTyping : true,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue : (state, action) =>{
        state.searchValue = action.payload;
    },
    setTyping : (state,action) =>{
      state.isTyping = action.payload;
    }
  },
});

export const {setSearchValue, setTyping } = searchSlice.actions

export default searchSlice.reducer;
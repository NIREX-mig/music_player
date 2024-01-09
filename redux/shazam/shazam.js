import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUri = process.env.NEXT_PUBLIC_SHAZAM_CORE_API;

export const fetchData = createAsyncThunk("shazam/fetchData", async () => {
  const response = await axios.get(apiUri);
  return response.data;
});

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const shazamSlice = createSlice({
  name: "shazam",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(fetchData.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchData.fulfilled, (state,action) => {
        state.status = 'succeeded';
        state.data = action.payload;
    })
    .addCase(fetchData.rejected, (state , action ) => {
        state.status = 'faide';
        state.error = action.error.message;
    })
  },
});


export default shazamSlice.reducer;
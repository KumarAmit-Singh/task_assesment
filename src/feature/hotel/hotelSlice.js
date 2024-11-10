import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotels: [],
  loading: false,
  error: null,
};
// Thunk to fetch albums from the API
export const fetchHotels = createAsyncThunk("hotels/fetchHotels", async () => {
  const response = await fetch("https://hotel.api.clickbuff.in/home");
  const res = await response.json();

  console.log(response, "response");
  return res;
});

const tourSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    // You can add other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear error if previously set
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tours";
      });
  },
});

export default tourSlice.reducer;

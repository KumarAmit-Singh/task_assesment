import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./feature/hotel/hotelSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
});

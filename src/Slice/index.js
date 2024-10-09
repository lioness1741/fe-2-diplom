import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice";
import routeSlice from "./routeSlice";
import seatsSlice from "./seatsSlice";
import passengersSlice from "./passengersSlice";
import paySlice from "./paySlice";
import bookingSlice from "./bookingSlice";
import filterSlice from "./filterSlice";
import stageSlice from "./stageSlice";

export default  configureStore({
  reducer: {
    search: searchReducer,
    routes: routeSlice,
    seats: seatsSlice,
    passengers: passengersSlice,
    pay: paySlice,
    booking: bookingSlice,
    filter: filterSlice,
    stage: stageSlice,
  },
});
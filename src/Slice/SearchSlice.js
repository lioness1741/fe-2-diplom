
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date_start: null,
  date_end: null,
  routeFrom: "санкт-петербург",
  routeTo: "москва",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchHandleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    cityExchange: (state) => {
      const from = state.routeFrom;
      state.routeFrom = state.routeTo;
      state.routeTo = from;
    },
  },
});

export const { searchHandleChange, cityExchange } = searchSlice.actions;
export default searchSlice.reducer;
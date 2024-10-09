import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSeats = createAsyncThunk(
   'seats/fetchSeats',
   async (type, { rejectWithValue, getState }) => {
      // const { filter } = getState();

      const { train } = getState().seats.train;
      const id = train[type]._id;
      const url = `https://netology-trainbooking.netoservices.ru/routes/${id}/seats`;

      try {
         const response = await fetch(url);
 
         if (!response.ok) {
            throw new Error('Server Error');
         }
         const data = await response.json();
         return { type, data };
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

const initialState = {
   train: JSON.parse(localStorage.getItem('train')) || null,
   status: null,
   error: null,

   departure: JSON.parse(localStorage.getItem('seats-departure')) || {
      coachClass: null,
      coachItems: [],
      seats: {},
      seatsCount: 0,
      services: {},
      coachList: [],
   },
   arrival: JSON.parse(localStorage.getItem('seats-arrival')) || {
      coachClass: null,
      coachItems: [],
      seats: {},
      seatsCount: 0,
      services: {},
      coachList: [],
   },
};
const seatsSlice = createSlice({
   name: 'seats',
   initialState,
   reducers: {
      trainAdd: (state, action) => {
         state.train = action.payload;
         localStorage.setItem('train', JSON.stringify(action.payload));
      },
      trainClear: (state) => {
         state.train = null;
      },

      // addDepartureCoachList:(state, action) => {

      //    state.departure.coachList = action.payload;
      //    localStorage.setItem("seat-departure")
      // },
      coachClassChange: (state, action) => {
         const { coachClass, type } = action.payload;
         state[type].coachClass = coachClass;
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },
      coachItemsSelect: (state, action) => {
         const { id, type } = action.payload;
         state[type].coachItems.push(id);
         state[type].services[id] = [];
         state[type].seats[id] = [];
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },
      coachItemsUnSelect: (state, action) => {
         const { id, type } = action.payload;
         state[type].coachItems = state[type].coachItems.filter(
            (el) => el !== id
         );
         state[type].services[id] = [];
         state[type].seats[id] = [];
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },
      coachItemsClear: (state, action) => {
         const { type } = action.payload;
         state[type].coachItems = [];
         state[type].services = {};
         state[type].seats = {};
         state[type].seatsCount = 0;
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },
      seatsItemSelect: (state, action) => {
         const { id, number, type } = action.payload;
         state[type].seats[id].push(number);
         state[type].seatsCount += 1;
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },

      seatsItemUnSelect: (state, action) => {
         const { id, number, type } = action.payload;
         state[type].seats[id] = state[type].seats[id].filter(
            (el) => el !== number
         );
         state[type].seatsCount -= 1;
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },

      serviceItemSelect: (state, action) => {
         const { id, service, type } = action.payload;
         state[type].services[id].push(service);
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },
      serviceItemUnSelect: (state, action) => {
         const { id, service, type } = action.payload;
         state[type].services[id] = state[type].services[id].filter(
            (el) => el !== service
         );
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },
   },
   extraReducers: {
      [fetchSeats.pending]: (state) => {
         state.status = 'panding';
         state.error = null;
      },
      [fetchSeats.fulfilled]: (state, action) => {
         state.status = 'resolved';
         const { type, data } = action.payload;
         state[type].coachList = data;
         localStorage.setItem(`seats-${type}`, JSON.stringify(state[type]));
      },
      [fetchSeats.rejected]: (state, action) => {
         state.status = 'rejected';
         state.error = action.payload;
      },
   },
});

export const {
   seatsItemUnSelect,
   trainAdd,
   trainClear,
   coachClassChange,
   coachItemsSelect,
   coachItemsUnSelect,
   coachItemsClear,
   seatsItemSelect,
   serviceItemSelect,
   serviceItemUnSelect,
   // addDepartureCoachList,
} = seatsSlice.actions;
export default seatsSlice.reducer;
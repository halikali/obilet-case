import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    origin: { name: "İzmir", id: "383" },
    destination: { name: "Ankara", id: "356" },
    departureDate: new Date(),
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.data.origin = action.payload;
    },
    setdestination: (state, action) => {
      state.data.destination = action.payload;
    },
    setDepartureDate: (state, action) => {
      state.data.departureDate = action.payload;
    },
    changeValues: (state) => {
      [state.data.origin, state.data.destination] = [
        state.data.destination,
        state.data.origin,
      ];
    },
  },
});

export const { setOrigin, setdestination, setDepartureDate, changeValues } =
  formSlice.actions;
export default formSlice.reducer;

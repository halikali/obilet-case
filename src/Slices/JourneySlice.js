import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  journey: {
    isLoad: false,
    data: {},
  },
  locationList: {},
};

export const fetchLocations = createAsyncThunk(
  "journey/getLocationList",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/getAllLocations"
    );
    return response.data;
  }
);

export const fetchJourney = createAsyncThunk(
  "journey/getJourney",
  async (values) => {
    const response = await axios.get("http://localhost:5000/api/getJourneys",{
      params: values,
    });
    return response.data;
  }
);

export const journeySlice = createSlice({
  name: "journey",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.locationList = action.payload;
    });
    builder.addCase(fetchJourney.pending, (state) => {
      state.journey.isLoad = false;
    });
    builder.addCase(fetchJourney.fulfilled, (state, action) => {
      state.journey.data = action.payload;
      state.journey.isLoad = true;
    });
  },
});

export const { setJourneyInfo, getLocationList } = journeySlice.actions;
export default journeySlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import formReducer from "Slices/FormSlices";
import journeyReducer from "Slices/JourneySlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    journey: journeyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

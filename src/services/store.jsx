import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./dataApi";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

export default store;

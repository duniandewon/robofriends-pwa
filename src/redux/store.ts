import { configureStore } from "@reduxjs/toolkit";

import robotsReducer from "@/redux/robotsSlice";

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

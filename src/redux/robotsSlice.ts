import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IRobot } from "robots";

import { RootState } from "./store";

interface InitialState {
  robots: IRobot[];
  filteredRobots: IRobot[];
  status: "idle" | "loading" | "failed";
}

const initialState: InitialState = {
  robots: [],
  filteredRobots: [],
  status: "idle",
};

export const fetchRobots = createAsyncThunk("robots/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const robots = await res.json();

  return robots;
});

const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    filterRobots: (state, action: PayloadAction<string>) => {
      console.log("hello filterRobots");
      if (!action.payload) state.filteredRobots = [];
      else
        state.filteredRobots = state.robots.filter((robot) =>
          robot.name.toLowerCase().includes(action.payload.toLowerCase())
        );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRobots.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRobots.fulfilled, (state, action) => {
        state.status = "idle";
        state.robots = action.payload;
      })
      .addCase(fetchRobots.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { filterRobots } = robotsSlice.actions;

export const selectRobots = (state: RootState) => state.robots.robots;
export const selectFilteredRobots = (state: RootState) =>
  state.robots.filteredRobots;

export default robotsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CellType } from "../types";

interface StatsState {
  noughtsCount: number;
  crossesCount: number;
  tieCount: number;
}

const initialState: StatsState = {
  noughtsCount: 0,
  crossesCount: 0,
  tieCount: 0,
};

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    updateStats: (state, action: PayloadAction<CellType | "tie">) => {
      const { payload } = action;
      payload === "noughts"
        ? state.noughtsCount++
        : payload === "crosses"
        ? state.crossesCount++
        : state.tieCount++;
    },
  },
});

export const { updateStats } = statsSlice.actions;
export default statsSlice.reducer;

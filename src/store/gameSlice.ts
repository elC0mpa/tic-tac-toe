import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CellStatusChangePayload, CellType } from "../types";

interface GameState {
  cellsState: CellType[][];
}

const initialState: GameState = {
  cellsState: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeCellStatus: (
      state,
      action: PayloadAction<CellStatusChangePayload>
    ) => {
      const { payload } = action;
      const { row, column, type } = payload;
      state.cellsState[row][column] = type;
    },
  },
});

export const { changeCellStatus } = gameSlice.actions;

export default gameSlice.reducer;

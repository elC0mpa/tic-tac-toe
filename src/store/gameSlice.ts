import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CellStatusChangePayload, CellType } from "../types";

interface GameState {
  cellsState: CellType[][];
  actualTurn: CellType;
}

const initialState: GameState = {
  cellsState: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
  actualTurn: "noughts",
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
      const { row, column } = payload;
      state.cellsState[row][column] = state.actualTurn;
      state.actualTurn = state.actualTurn === "noughts" ? "crosses" : "noughts";
    },
  },
});

export const { changeCellStatus } = gameSlice.actions;

export default gameSlice.reducer;

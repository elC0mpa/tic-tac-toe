import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CellStatusChangePayload, CellType } from "../types";

interface GameState {
  cellsState: CellType[][];
  actualTurn: CellType;
  winningCells?: number[];
  winnerTurn: CellType;
}

const initialState: GameState = {
  cellsState: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
  actualTurn: "noughts",
  winningCells: [0, 0, 0],
  winnerTurn: undefined,
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
      if (state.cellsState[row][column] !== undefined) {
        return;
      }
      state.cellsState[row][column] = state.actualTurn;
      state.actualTurn = state.actualTurn === "noughts" ? "crosses" : "noughts";
    },
    setWinningCells: (state, action: PayloadAction<number[]>) => {
      state.winningCells = action.payload;
      state.winnerTurn = state.actualTurn === "noughts" ? "crosses" : "noughts";
      console.log("winningCells: ", state.winningCells);
      console.log("winnerTurn: ", state.winnerTurn);
    },
  },
});

export const { changeCellStatus, setWinningCells } = gameSlice.actions;

export default gameSlice.reducer;

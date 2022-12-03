import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CellStatusChangePayload, CellType } from "../types";

interface GameState {
  cellsState: CellType[][];
  actualTurn: CellType;
  winningCells?: number[] | undefined[];
  winnerTurn: CellType;
}

const initialState: GameState = {
  cellsState: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
  actualTurn: "noughts",
  winningCells: [undefined, undefined, undefined],
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
    checkIfGameIsOver: (state) => {
      const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      const cellsState = state.cellsState;
      const valuesFromCells: CellType[][] = [];
      winningConditions.forEach((combination) => {
        const temp = combination.map((cellNumber) => {
          const row = Math.floor(cellNumber / 3);
          const column = cellNumber % 3;
          return cellsState[row][column];
        });
        valuesFromCells.push(temp);
      });
      valuesFromCells.forEach((cells: CellType[], index: number) => {
        if (cells[0] && cells.every((cell) => cell === cells[0])) {
          state.winningCells = winningConditions[index];
          state.winnerTurn =
            state.actualTurn === "noughts" ? "crosses" : "noughts";
          console.log("game over: ", state.winnerTurn, state.winningCells);
        }
      });
    },
  },
});

export const { changeCellStatus, checkIfGameIsOver } = gameSlice.actions;

export default gameSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { CellType } from "../types";
import gameReducer, { setWinningCells } from "./gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

store.subscribe(() => {
  const { game } = store.getState();
  const { winnerTurn } = game;
  if (winnerTurn) return;
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
  const cellsState = game.cellsState;
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
      store.dispatch(setWinningCells(winningConditions[index]));
      return;
    }
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { checkIfGameIsOver } from "../store/gameSlice";
import { updateStats } from "../store/statsSlice";
import { StyledCellsContainer, StyledGeneralContainer } from "../styled";
import { CellType } from "../types";
import Cell from "./Cell";
import GameStats from "./GameStats";

const TicTacToe = () => {
  const dispatch = useAppDispatch();
  const cells = useAppSelector((state) => state.game.cellsState);
  const winninigCells = useAppSelector((state) => state.game.winningCells);
  const winner = useAppSelector((state) => state.game.winnerTurn);
  useEffect(() => {
    dispatch(checkIfGameIsOver());
  }, [cells]);
  useEffect(() => {
    winner && dispatch(updateStats(winner));
  }, [winner]);
  return (
    <StyledGeneralContainer>
      <StyledCellsContainer>
        {cells.map((row: CellType[], rowIndex: number) => {
          return row.map((column: CellType, columnIndex: number) => {
            return (
              <Cell
                winnerCell={Boolean(
                  winninigCells?.some(
                    (cell) => cell === rowIndex * 3 + columnIndex
                  )
                )}
                key={`row-${rowIndex} column-${columnIndex}`}
                row={rowIndex}
                column={columnIndex}
              />
            );
          });
        })}
      </StyledCellsContainer>
      <GameStats />
    </StyledGeneralContainer>
  );
};

export default TicTacToe;

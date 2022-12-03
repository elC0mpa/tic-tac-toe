import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { checkIfGameIsOver } from "../store/gameSlice";
import { StyledCellsContainer, StyledGeneralContainer } from "../styled";
import { CellType } from "../types";
import Cell from "./Cell";

const TicTacToe = () => {
  const dispatch = useAppDispatch();
  const cells = useAppSelector((state) => state.game.cellsState);
  const winninigCells = useAppSelector((state) => state.game.winningCells);
  useEffect(() => {
    dispatch(checkIfGameIsOver());
  }, [cells]);
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
    </StyledGeneralContainer>
  );
};

export default TicTacToe;

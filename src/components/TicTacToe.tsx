import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { checkIfGameIsOver } from "../store/gameSlice";
import { StyledCellsContainer, StyledGeneralContainer } from "../styled";
import { CellType } from "../types";
import Cell from "./Cell";

const TicTacToe = () => {
  const cells = useAppSelector((state) => state.game.cellsState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkIfGameIsOver());
  }, cells);
  return (
    <StyledGeneralContainer>
      <StyledCellsContainer>
        {cells.map((row: CellType[], rowIndex: number) => {
          return row.map((column: CellType, columnIndex: number) => {
            return (
              <Cell
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

import { useAppSelector } from "../hooks";
import { StyledCellsContainer } from "../styled";
import { CellType } from "../types";
import Cell from "./Cell";

const TicTacToe = () => {
  const cells = useAppSelector((state) => state.game.cellsState);
  return (
    <StyledCellsContainer>
      {cells.map((row: CellType[], rowIndex: number) => {
        return row.map((column: CellType, columnIndex: number) => {
          return <Cell row={rowIndex} column={columnIndex} />;
        });
      })}
    </StyledCellsContainer>
  );
};

export default TicTacToe;

import { useAppSelector } from "../hooks";
import { StyledCellsContainer } from "../styled";

const TicTacToe = () => {
  const cells = useAppSelector((state) => state.game.cellsState);
  return <StyledCellsContainer></StyledCellsContainer>;
};

export default TicTacToe;

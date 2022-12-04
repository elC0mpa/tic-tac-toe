import { useAppDispatch, useAppSelector } from "../hooks";
import { changeCellStatus, resetGameData } from "../store/gameSlice";
import { StyledCell, StyledCrossIcon, StyledNoughtsIcon } from "../styled";

type CellProps = {
  row: number;
  column: number;
  winnerCell: boolean;
};

const Cell = ({ row, column, winnerCell }: CellProps) => {
  const cellStatus = useAppSelector(
    (state) => state.game.cellsState[row][column]
  );
  const winnerTurn = useAppSelector((state) => state.game.winnerTurn);
  const dispatch = useAppDispatch();
  const cellClicked = () => {
    winnerTurn
      ? dispatch(resetGameData())
      : dispatch(changeCellStatus({ row, column }));
  };
  return (
    <StyledCell
      onClick={cellClicked}
      className={winnerTurn === "tie" ? "flash" : ""}
    >
      {cellStatus === undefined ? null : cellStatus === "noughts" ? (
        <StyledNoughtsIcon
          size={120}
          className={winnerCell ? "flash" : ""}
          color="white"
        />
      ) : (
        <StyledCrossIcon
          size={120}
          className={winnerCell ? "flash" : ""}
          color="white"
        />
      )}
    </StyledCell>
  );
};

export default Cell;

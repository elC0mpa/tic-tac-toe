import { useAppDispatch, useAppSelector } from "../hooks";
import { useWidth } from "../hooks/useWidth";
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
  const width = useWidth();

  return (
    <StyledCell
      onClick={cellClicked}
      className={winnerTurn === "tie" ? "flash" : ""}
    >
      {cellStatus === undefined ? null : cellStatus === "noughts" ? (
        <StyledNoughtsIcon
          size={width < 600 ? 60 : 120}
          className={winnerCell ? "flash" : ""}
          color="white"
        />
      ) : (
        <StyledCrossIcon
          size={width < 600 ? 90 : 120}
          className={winnerCell ? "flash" : ""}
          color="white"
        />
      )}
    </StyledCell>
  );
};

export default Cell;

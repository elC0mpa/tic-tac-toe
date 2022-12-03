import { useAppDispatch, useAppSelector } from "../hooks";
import { changeCellStatus } from "../store/gameSlice";
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
  const dispatch = useAppDispatch();
  const cellClicked = () => {
    dispatch(changeCellStatus({ row, column }));
  };
  return (
    <StyledCell onClick={cellClicked}>
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

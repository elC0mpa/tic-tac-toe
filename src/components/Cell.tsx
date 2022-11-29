import { useAppDispatch, useAppSelector } from "../hooks";
import { changeCellStatus } from "../store/gameSlice";
import { BsCircle, BsX } from "react-icons/bs";
import { StyledCell } from "../styled";

type CellProps = {
  row: number;
  column: number;
};

const Cell = ({ row, column }: CellProps) => {
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
        <BsCircle size={40} />
      ) : (
        <BsX size={40} />
      )}
    </StyledCell>
  );
};

export default Cell;

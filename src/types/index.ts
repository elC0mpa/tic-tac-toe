export type CellType = "tic" | "tac" | undefined;
export type CellStatusChangePayload = {
  type: CellType;
  row: number;
  column: number;
};

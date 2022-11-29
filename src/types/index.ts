export type CellType = "noughts" | "crosses" | undefined;
export type CellStatusChangePayload = {
  row: number;
  column: number;
};

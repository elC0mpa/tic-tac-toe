import styled from "@emotion/styled";

export const StyledCellsContainer = styled.div`
  margin: 0 auto;
  max-width: 480px;
  min-height: 360px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledCell = styled.div`
  border: 1px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

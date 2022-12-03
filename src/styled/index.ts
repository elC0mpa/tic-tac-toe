import styled from "@emotion/styled";

export const StyledGeneralContainer = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: stretch;
`;

export const StyledCellsContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledCell = styled.div`
  border: 1px dashed white;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

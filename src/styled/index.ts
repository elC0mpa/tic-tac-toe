import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { BsCircle, BsX } from "react-icons/bs";

const FlashAnimation = keyframes`
  0% {opacity: 1}
  50% {opacity: 0}
  100% {opacity: 1}
`;

const FlashBorderAnimation = keyframes`
  0% {border: 1px dashed white;}
  50% {border: 1px dashed black;}
  100% {border: 1px dashed white;}
`;

export const StyledGeneralContainer = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
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
  &.flash {
    animation-name: ${FlashBorderAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: 3;
  }
`;

export const StyledNoughtsIcon = styled(BsCircle)`
  &.flash {
    animation-name: ${FlashAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: 3;
  }
`;

export const StyledCrossIcon = styled(BsX)`
  &.flash {
    animation-name: ${FlashAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: 3;
  }
`;

export const StyledStatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  width: 80%;
`;

export const StyledStatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const StyledStatsItemLabel = styled.span`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const StyledStatsItemValue = styled.span`
  font-size: 80px;
  font-weight: 400;
`;

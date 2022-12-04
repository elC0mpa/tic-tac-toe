import { useAppSelector } from "../hooks";
import { StyledStatsContainer } from "../styled";
import StatsItem from "./StatsItem";

const GameStats = () => {
  const crossesCount = useAppSelector((state) => state.stats.crossesCount);
  const noughtsCount = useAppSelector((state) => state.stats.noughtsCount);
  const tieCount = useAppSelector((state) => state.stats.tieCount);
  const actualTurn = useAppSelector((state) => state.game.actualTurn);
  return (
    <StyledStatsContainer>
      <StatsItem
        label="Player X"
        value={crossesCount.toString()}
        isActive={actualTurn === "crosses"}
      />
      <StatsItem label="Tie" value={tieCount.toString()} isActive />
      <StatsItem
        label="Player 0"
        value={noughtsCount.toString()}
        isActive={actualTurn === "noughts"}
      />
    </StyledStatsContainer>
  );
};

export default GameStats;

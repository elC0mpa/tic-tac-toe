import { useAppSelector } from "../hooks";
import { StyledStatsContainer } from "../styled";
import StatsItem from "./StatsItem";

const GameStats = () => {
  const crossesCount = useAppSelector((state) => state.stats.crossesCount);
  const noughtsCount = useAppSelector((state) => state.stats.noughtsCount);
  const tieCount = useAppSelector((state) => state.stats.tieCount);
  return (
    <StyledStatsContainer>
      <StatsItem label="Player X" value={crossesCount.toString()} />
      <StatsItem label="Tie" value={tieCount.toString()} />
      <StatsItem label="Player 0" value={noughtsCount.toString()} />
    </StyledStatsContainer>
  );
};

export default GameStats;

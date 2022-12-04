import {
  StyledStatsItem,
  StyledStatsItemLabel,
  StyledStatsItemValue,
} from "../styled";

type Props = {
  label: string;
  value: string;
  isActive: boolean;
};

const StatsItem = ({ label, value, isActive }: Props) => {
  return (
    <StyledStatsItem className={isActive ? "is-active" : ""}>
      <StyledStatsItemLabel>{label}</StyledStatsItemLabel>
      <StyledStatsItemValue>{value}</StyledStatsItemValue>
    </StyledStatsItem>
  );
};

export default StatsItem;

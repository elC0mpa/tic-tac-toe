import {
  StyledStatsItem,
  StyledStatsItemLabel,
  StyledStatsItemValue,
} from "../styled";

type Props = {
  label: string;
  value: string;
};

const StatsItem = ({ label, value }: Props) => {
  return (
    <StyledStatsItem>
      <StyledStatsItemLabel>{label}</StyledStatsItemLabel>
      <StyledStatsItemValue>{value}</StyledStatsItemValue>
    </StyledStatsItem>
  );
};

export default StatsItem;

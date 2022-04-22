import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <StatList>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback: {feedback}%</StatItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
};

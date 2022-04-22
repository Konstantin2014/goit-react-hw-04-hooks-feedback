import PropTypes from 'prop-types';
import { ButtonBlock, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, voteForIncriment }) => {
  return (
    <ButtonBlock>
      {options.map(item => (
        <Button
          key={item}
          type="button"
          onClick={() => {
            voteForIncriment(item);
          }}
        >
          {item}
        </Button>
      ))}
    </ButtonBlock>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  voteForIncriment: PropTypes.func.isRequired,
};

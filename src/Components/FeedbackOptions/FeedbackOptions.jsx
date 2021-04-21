import Button from '../Button';
import capitalize from './capitalize';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <>
      {keys.map(elem => {
        const text = capitalize(elem);
        return <Button key={elem} text={text} onIncrement={onLeaveFeedback} />;
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

import Button from '../Button';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = Object.keys(options);
  return (
    <>
      {elements.map(elem => {
        return <Button key={elem} text={elem} onIncrement={onLeaveFeedback} />;
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

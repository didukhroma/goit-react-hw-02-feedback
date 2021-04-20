import Button from '../Button';
import capitalize from './capitalize';

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
export default FeedbackOptions;

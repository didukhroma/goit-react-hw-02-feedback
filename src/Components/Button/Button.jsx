import PropTypes from 'prop-types';

const Button = ({ text = 'Button', onIncrement }) => {
  const handlerIncrement = () => onIncrement(text);
  return (
    <button type="button" onClick={handlerIncrement}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onIncrement: PropTypes.func.isRequired,
};

export default Button;

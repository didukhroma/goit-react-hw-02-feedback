const Button = ({ text, onIncrement }) => {
  return (
    <button type="button" onClick={() => onIncrement(text)}>
      {text}
    </button>
  );
};
export default Button;

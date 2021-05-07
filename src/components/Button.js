import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button({ name, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`button ${name === '=' ? 'button--span-2' : ''} ${['=', '+', '-', 'x', '÷'].includes(name) ? 'button--orange' : ''}`}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;

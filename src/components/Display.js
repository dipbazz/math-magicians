import PropTypes from 'prop-types';
import '../styles/Display.css';

function Display({ result }) {
  return (
    <div className="display">
      {result}
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;

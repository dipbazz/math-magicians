import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <>
      {result}
    </>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;

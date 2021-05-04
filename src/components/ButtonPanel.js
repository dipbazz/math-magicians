import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ handleClick }) {
  return (
    <>
      <div>
        <Button handleClick={() => handleClick('AC')} name="AC" />
        <Button handleClick={() => handleClick('+/-')} name="+/-" />
        <Button handleClick={() => handleClick('%')} name="%" />
        <Button handleClick={() => handleClick('÷')} name="÷" />
      </div>

      <div>
        <Button handleClick={() => handleClick('7')} name="7" />
        <Button handleClick={() => handleClick('8')} name="8" />
        <Button handleClick={() => handleClick('9')} name="9" />
        <Button handleClick={() => handleClick('X')} name="X" />
      </div>

      <div>
        <Button handleClick={() => handleClick('4')} name="4" />
        <Button handleClick={() => handleClick('5')} name="5" />
        <Button handleClick={() => handleClick('6')} name="6" />
        <Button handleClick={() => handleClick('-')} name="-" />
      </div>

      <div>
        <Button handleClick={() => handleClick('1')} name="1" />
        <Button handleClick={() => handleClick('2')} name="2" />
        <Button handleClick={() => handleClick('3')} name="3" />
        <Button handleClick={() => handleClick('+')} name="+" />
      </div>

      <div>
        <Button handleClick={() => handleClick('0')} name="0" />
        <Button handleClick={() => handleClick('.')} name="." />
        <Button handleClick={() => handleClick('=')} name="=" />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;

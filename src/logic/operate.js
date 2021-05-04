import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result;

  switch (operation) {
    case 'x':
      result = x.times(y);
      break;
    case '%':
      result = x.times(y).div(100);
      break;
    case '-':
      result = x.minus(y);
      break;
    case '+':
      result = x.plus(y);
      break;
    case '÷':
      if (y.toString() === '0') {
        result = 'Error';
      } else {
        result = x.div(y);
      }
      break;
    default:
      result = '0';
  }

  return result.toString();
}

export default operate;

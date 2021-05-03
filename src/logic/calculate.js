import operate from './operate';

function calculate(calculatorData, buttonName) {
  let { total, next, operation } = { ...calculatorData };

  switch (buttonName) {
    case '+/-':
      if (next) {
        next = (next * -1).toString();
      } else if (total) {
        total = (total * -1).toString();
      }
      break;
    case 'AC':
      total = '';
      next = '';
      operation = null;
      break;
    case '=':
      total = operate(total, next, operation);
      next = '';
      operation = null;
      break;
    default:
      total += buttonName;
  }

  return { total, next, operation };
}

export default calculate;

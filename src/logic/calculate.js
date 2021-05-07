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
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = '';
        operation = null;
      }
      break;
    case '.':
      if (next) {
        next += next.includes('.') ? '' : buttonName;
      } else {
        total += total.includes('.') ? '' : buttonName;
      }
      break;
    case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
      if (!operation) {
        total += buttonName;
      } else {
        next += buttonName;
      }
      break;
    default:
      operation = total ? buttonName : null;
  }

  return { total, next, operation };
}

export default calculate;

import React, { useState } from 'react';
import '../styles/Calculator.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function Calculator() {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState(null);

  function handleClick(buttonName) {
    const calculation = calculate({
      total: total === 'Error' ? '' : total,
      next,
      operation,
    }, buttonName);

    setTotal(calculation.total);
    setNext(calculation.next);
    setOperation(calculation.operation);
  }

  function displayResult() {
    let result = '';

    if (total) {
      result += total;
    }
    if (operation) {
      result += operation;
    }
    if (next) {
      result += next;
    }
    return result;
  }

  return (
    <div className="flex">
      <h3>
        Let&#39;s do some math!
      </h3>
      <div className="Calculator">
        <Display result={displayResult()} />
        <ButtonPanel handleClick={(name) => handleClick(name)} />
      </div>
    </div>
  );
}

export default Calculator;

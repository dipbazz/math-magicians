import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
  }

  handleClick(buttonName) {
    let { total } = this.state;
    total = total === 'Error' ? '' : total;
    const { next, operation } = this.state;

    this.setState(calculate({ total, next, operation }, buttonName));
  }

  displayResult() {
    const { total, next, operation } = this.state;
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

  render() {
    return (
      <div className="App">
        <Display result={this.displayResult()} />
        <ButtonPanel handleClick={(name) => this.handleClick(name)} />
      </div>
    );
  }
}

export default App;

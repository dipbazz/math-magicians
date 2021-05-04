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
    const { total, next, operation } = this.state;

    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total } = this.state;
    return (
      <div className="App">
        <Display result={total} />
        <ButtonPanel handleClick={(name) => this.handleClick(name)} />
      </div>
    );
  }
}

export default App;

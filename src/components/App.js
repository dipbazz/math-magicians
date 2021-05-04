import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

calculate({ total: '10', next: '5', operation: 'X' }, '=');

function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;

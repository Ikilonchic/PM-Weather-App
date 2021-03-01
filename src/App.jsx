import logo from './logo.svg';
import './App.css';

import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <Weather city={'dnipro'}></Weather>
    </div>
  );
}

export default App;

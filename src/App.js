import logo from './logo.svg';
import './App.css';

import Slogan from './Slogan';
import Rodape from './Rodape';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Slogan />
        
        <Rodape />
                
      </header>
    </div>
  );
}

export default App;

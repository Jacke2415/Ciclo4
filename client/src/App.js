import './components/template/css/App.css';
import Particulas from './components/particulas.js';
import Panel from './components/panel.js';
import Login from './components/login.js'; 
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Particulas/>
        <Panel/>
        <Login/>
      </div>
    </div>
      
  );
}

export default App;

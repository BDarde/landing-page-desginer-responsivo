import logo from './logo.svg';
import './App.css';
import Cabecalho from './C/cabecalho';
import Main from './C/Main'
import Rodape from './C/Rodape';

function App() {
  return (
    <div className="App">
        <Cabecalho />
        <Main />
        <Rodape />
    </div>
  );
}

export default App;

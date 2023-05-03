import logo from './logo.jpeg';
import './App.css';
import {getFooterCopy, getFullYear} from './utils';
import { Notifications } from './Notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="root-notifications">
          <Notifications />
          <Notifications />
        </div>   
      </main> 
      <footer className="App-footer"><p>Copyright {getFullYear()} - {getFooterCopy(true)}</p></footer>
    </div>
  );
}

export default App;
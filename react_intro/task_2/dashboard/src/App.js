import logo from './logo.jpeg';
import './App.css';
import {getFooterCopy, getFullYear} from './utils';
import { Notifications } from './Notifications';

function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="App-auth-form">
          <form action="/" method="post">
            <label>
              <span>Email:</span>
              <input name="email" />
            </label>
            <label>
              <span>Password:</span>
              <input name="password" type="password" />
            </label>
            <button type="submit">Ok</button>
          </form>
        </div>
   
      </main> 
      <footer className="App-footer"><p>Copyright {getFullYear()} - {getFooterCopy(true)}</p></footer>
    </div>
  );
}

export default App;
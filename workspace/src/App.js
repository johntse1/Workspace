import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>

        <form>
          <label for="uname">Username</label>
          <input type="text" id="uname" name="uname"></input><br/>
          <label for="uname">Password</label>
          <input type="text" id="pword" name="pword"></input><br/>
          <input type="submit" value="Submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;

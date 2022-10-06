import React from "react";
import Home from './Home'
import {Route, Link} from 'react-router-dom'; 
import NavBar from './NavBar';
import Jobs from './Jobs'
import Profile from './Profile'

function App() {
  return (
    <div className = "App">
      <NavBar/>
    <Route exact path="/home" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/jobs" component={Jobs} />

    <form>
          <label for="uname">Username</label>
          <input type="text" id="uname" name="uname"></input><br/>
          <label for="uname">Password</label>
          <input type="text" id="pword" name="pword"></input><br/>
          <input type="submit" value="Submit"></input>
        </form>
  </div>
  );
}

export default App;
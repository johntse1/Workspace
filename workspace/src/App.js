import React from "react";
import Home from './Home'
import {Route, Link} from 'react-router-dom'; 
import NavBar from './NavBar';
import Jobs from './Jobs'
import Profile from './Profile'

function App() {
  return (
    <div className = "App">
      <NavBar />
    <Route exact path="/home" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/jobs" component={Jobs} />
  </div>
  );
}

export default App;
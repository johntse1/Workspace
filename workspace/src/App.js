import React from "react";
import Home from './pages/Home'
import {Route, Link} from 'react-router-dom'; 
import NavBar from './components/navigation/NavBar';
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import Components1 from './components/Components1'
import { Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div className = "App">
      <h1>WELCOME TO WORKSPACE</h1>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Components1 />
        </Route>
        <Route exact path="/home" component={Home} >
        </Route>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/jobs" component={Jobs} />
      </Switch>

  </div>
  );
}

export default App;
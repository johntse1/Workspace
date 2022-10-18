import React from "react";
import Home from './pages/Home'
import {Route, Link} from 'react-router-dom'; 
import NavBar from './components/navigation/NavBar';
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import Login from './pages/DefaultPage'
import { Redirect, Switch,useHistory } from "react-router-dom";
import Button from './components/Button'
import CreateJob from './pages/CreateJob'

function App() {
  let history = useHistory()
  const logout =() => {
    localStorage.removeItem("JWT_TOKEN")
    history.push('/')
  }


  return (
    <div className = "App">
      <h1>WELCOME TO WORKSPACE</h1>
      <Button color='black' text='TEMPORARY SIGN OUT BUTTON' onClick={logout} />
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path="/home" component={Home} >
        </Route>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/create" component={CreateJob} />
      </Switch>

  </div>
  );
}

export default App;
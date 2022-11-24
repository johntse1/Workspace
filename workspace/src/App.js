import React from "react";
import Home from './pages/Home'
import {Route, Link} from 'react-router-dom'; 
//import NavBar from './components/navigation/NavBar';
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import defaultChat from "./pages/defaultChat";
import Login from './pages/DefaultPage'
import { Redirect, Switch,useHistory } from "react-router-dom";
import CreateJob from './pages/CreateJob'
import UserHome from './pages/UserHome'
import UserProfile from './pages/UserProfile'
import UserJobs from './pages/UserJobs'
import OtherUser from './pages/OtherUser'
import Review from './pages/Review'

import './App.css';

function App() {
  let history = useHistory()
  
  return (
    <div className = "App">
      <h1>WELCOME TO WORKSPACE</h1>
      
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/chat" component={defaultChat}/>
        
        {//Routes used for nav bar above
        }
        <Route exact path="/create" component={CreateJob} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route exact path="/userHome" component={UserHome} />
        <Route exact path="/userJobs" component={UserJobs} />
        <Route exact path="/otherUser" component={OtherUser} />
        <Route exact path="/review" component={Review} />
      </Switch>
  </div>
  );
}


export default App;
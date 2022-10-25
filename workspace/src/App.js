import React from "react";
import Home from './pages/Home'
import {Route, Link} from 'react-router-dom'; 
//import NavBar from './components/navigation/NavBar';
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import Login from './pages/DefaultPage'
import { Redirect, Switch,useHistory } from "react-router-dom";
import Button from './components/Button'
import CreateJob from './pages/CreateJob'
import UserHome from './pages/UserHome'
import UserProfile from './pages/UserProfile'
import UserJobs from './pages/UserJobs'


import Chat from "./pages/Chat";
import io from 'socket.io-client';

import { useState } from 'react';
import './App.css';
//backend connection
const socket  = io.connect("http://localhost:3000");

function App() {
  let history = useHistory()
  const logout =() => {
    localStorage.removeItem("JWT_TOKEN")
    history.push('/')
  }

  const[username,setUsername] = useState("");
  const[room,setRoom] = useState("");
  const[showChat,setShowChat] = useState(false);

  //connection button
  const joinRoom = () =>{
    if(username!==""&&room!==""){
      //passes the data from the front end to the backend
      socket.emit("join_room",room);
      setShowChat(true);
    }
  }

  return (
    <div className = "App">
      <h1>WELCOME TO WORKSPACE</h1>
      <Button color='black' text='TEMPORARY SIGN OUT BUTTON' onClick={logout} />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path="/home" component={Home} >
        </Route>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/create" component={CreateJob} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route exact path="/userHome" component={UserHome} />
        <Route exact path="/userJobs" component={UserJobs} />
      </Switch>
    
      {!showChat ? (
        <div className="joinChatContainer">
        <h3>Join A chat</h3>
        <input
          type="text"
          placeholder="John..."
          onChange={(event)=>{
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Room..."
          onChange={(event)=>{
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join A Room</button>
        </div>
  
    ):(
      <Chat socket={socket} username={username} room={room}/>
    )}
  </div>
  );
}


export default App;
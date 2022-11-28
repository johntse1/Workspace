import React, { useContext } from 'react'
import Sidebar from '../components/chatStuff/Sidebar'
import Chat from '../components/chatStuff/Chat'
import { AuthContext } from '../components/context/AuthContext'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function DefaultChat(){

  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default DefaultChat
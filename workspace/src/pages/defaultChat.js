import React from 'react'
import Sidebar from '../components/chatStuff/Sidebar'
import Chat from '../components/chatStuff/Chat'

const defaultChat = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default defaultChat
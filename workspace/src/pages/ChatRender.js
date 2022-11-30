import Sidebar from '../components/chatStuff/Sidebar'
import Chat from '../components/chatStuff/Chat'
import NavBar from '../components/navigation/NavBar'

function ChatRender(){

  return (
    <div className='home'>
      <NavBar />
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default ChatRender
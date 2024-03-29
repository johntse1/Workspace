import Sidebar from '../../components/chatStuff/Sidebar'
import Chat from '../../components/chatStuff/Chat'
import NavBar from '../../components/navigation/NavBar'
import UserNavBar from '../../components/navigation/UserNavBar'

function ChatRender(){

  const navBar = () =>{
    let contBool = Boolean(localStorage.getItem('contractor'))
    console.log(contBool);
  }
  return (
    <div className='home'>
      <NavBar/>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default ChatRender
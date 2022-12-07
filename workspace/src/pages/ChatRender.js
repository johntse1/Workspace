import Sidebar from '../components/chatStuff/Sidebar'
import Chat from '../components/chatStuff/Chat'
import NavBar from '../components/navigation/NavBar'
import UserNavBar from '../components/navigation/UserNavBar'

function ChatRender(){

  const navBar = () =>{
    let contBool = localStorage.getItem('contractor')
    console.log("Am i a contractor "+ contBool);
    if(contBool === true){
      return <NavBar/>
    }
    else{
      return <UserNavBar/>
    }
  }
  return (
    <div className='home'>
      <div>{navBar()}</div>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default ChatRender
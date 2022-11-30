import Home from './pages/Home'
import {Link, Route} from 'react-router-dom'; 
//import NavBar from './components/navigation/NavBar';
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import ChatRender from "./pages/ChatRender";
import Login from './pages/DefaultPage'
import {Switch,useHistory } from "react-router-dom";
import CreateJob from './pages/CreateJob'
import UserHome from './pages/UserHome'
import UserProfile from './pages/UserProfile'
import UserJobs from './pages/UserJobs'
import OtherUser from './pages/OtherUser'
import Review from './pages/Review'
import './App.css';
import { useContext } from "react";
import { AuthContext } from "../src/components/context/AuthContext";
//import "../src/style.scss";
function App() {
  let history = useHistory()

  const {currentUser} = useContext(AuthContext);
  console.log("Current User"+ currentUser);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Link to="/login" />;
    }

    return children
  };
  return (
    <div className = "App">
      <h1 class="header">WELCOME TO WORKSPACE</h1>
      
      <Switch>
        <Route exact path="/" component={Login}>
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/chat" component={ChatRender}/>
        
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
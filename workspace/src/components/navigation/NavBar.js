import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';
import { Redirect, Switch,useHistory } from "react-router-dom";

function NavBar(){
    let history = useHistory()
    const logout =() => {
        localStorage.removeItem("JWT_TOKEN")
        history.push('/')
      }
    return(
        <ul class='uli'>
            <li class='lii'><Link to='/home' class='navLink'>Home</Link></li>
            <li class='lii'><Link to='/profile' class='navLink'>My Profile</Link></li>
            <li class='lii'><Link to='/jobs' class='navLink'>Jobs</Link></li>
            <li class='lii'><Link to='/chat' class='navLink'>Chat</Link></li>
            <li><Link class='logOut' onClick={logout}>Logout</Link></li>
        </ul>
    );
}
export default NavBar;
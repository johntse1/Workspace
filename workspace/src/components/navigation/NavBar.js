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
        <ul className='uli'>
            <li className='lii'><Link to='/home' className='navLink'>Home</Link></li>
            <li className='lii'><Link to='/profile' className='navLink'>My Profile</Link></li>
            <li className='lii'><Link to='/jobs' className='navLink'>Jobs</Link></li>
            <li className='lii'><Link to='/chat' className='navLink'>Chat</Link></li>
            <li><Link className='logOut' onClick={logout}>Logout</Link></li>
        </ul>
    );
}
export default NavBar;
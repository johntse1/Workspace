import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';
import Button from '../Button';
import { Redirect, Switch,useHistory } from "react-router-dom";

function UserNavBar(){
    let history = useHistory()
    const logout =() => {
        localStorage.removeItem("JWT_TOKEN")
        history.push('/')
      }
    return(
        <ul className='uli'>
            <li className='lii'><Link to='/userHome' className='navLink'>Home</Link></li>
            <li className='lii'><Link to='/userProfile' className='navLink'>My Profile</Link></li>
            <li className='lii'><Link to='/userjobs' className='navLink'>Jobs</Link></li>
            <li className='lii'><Link to='/chat' className='navLink'>Chat</Link></li>
            <li><Link className='logOut' onClick={logout}>Logout</Link></li>
        </ul>
    );
}
export default UserNavBar;
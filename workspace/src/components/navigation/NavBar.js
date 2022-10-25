import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to='/home'>Home2</Link></li>
            <li><Link to='/profile'>My Profile</Link></li>
            <li><Link to='/jobs'>Jobs</Link></li>
        </ul>
    );
}
export default NavBar;
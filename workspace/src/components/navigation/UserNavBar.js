import React from 'react'
import {Link} from 'react-router-dom'

function userNavBar(){
    return(
        <ul>
            <li><Link to='/userHome'>Home2</Link></li>
            <li><Link to='/userProfile'>My Profile</Link></li>
            <li><Link to='/userjobs'>Jobs</Link></li>

        </ul>
    );
}
export default userNavBar;
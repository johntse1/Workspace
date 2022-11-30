import React from 'react'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axios from 'axios'

function User(props){
    const displayTitle = () =>{
        console.log(props)
    }
    return(
        <div className='post'>
            <Link to={{pathname: '/otherUser', state: props.post._id}} className='stuff'><div>{props.post.first_name} {props.post.last_name}</div></Link>
            <div className='stuff'>{props.post.description}</div>
            <div className='stuff'>Skills: {props.post.skills.join(' ')}</div>
            <div className='stuff'><Button text='Not interested' onClick={displayTitle}></Button></div>
        </div>
    );
}

export default User;
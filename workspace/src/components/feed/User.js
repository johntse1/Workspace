import React from 'react'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axios from 'axios'

function User(props){
    const displayTitle = () =>{
        console.log(props)
    }
    return(
        <div class='post'>
            <Link to={{pathname: '/otherUser', state: props.post._id}} class='stuff'><div>{props.post.first_name} {props.post.last_name}</div></Link>
            <div class='stuff'>{props.post.description}</div>
            <div class='stuff'>Skills: {props.post.skills.join(' ')}</div>
            <div class='stuff'><Button text='Not interested' onClick={displayTitle}></Button></div>
        </div>
    );
}

export default User;
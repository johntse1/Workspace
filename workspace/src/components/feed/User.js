import React from 'react'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axios from 'axios'

function User(props){
    const displayTitle = () =>{
        console.log(props)
    }
    return(
        <div>
            <Link to={{pathname: '/otherUser', state: props.post._id}}><div>{props.post.first_name} {props.post.last_name}</div></Link>
            <div>{props.post.description}</div>
            <div>{props.post.skills}</div>
            <Button text='Not interested' onClick={displayTitle}></Button>
        </div>
    );
}

export default User;
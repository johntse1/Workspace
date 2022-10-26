import React from 'react'
import Button from '../Button';
import {Link} from 'react-router-dom'

function Post(props){
    const displayTitle = () =>{
        console.log(props)
    }

    return(
        <div key={props.post._id}>
            <h1>{props.post.title}</h1>
            <br />
            <Link to={{pathname: '/otherUser', state: props.post.user}}>{props.post.user}</Link>
            <div>{props.post.text}</div>
            <div>{props.post.price}</div>
            <div>{props.post.tags}</div>
            <Button text='Not interested' onClick={displayTitle}></Button>
            <Button text='I want this job'></Button>
        </div>
    );
}

export default Post;
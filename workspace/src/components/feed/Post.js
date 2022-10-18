import React from 'react'
import Button from '../Button';

function Post(props){
    const displayTitle = () =>{
        console.log(props)
    }

    return(
        <div key={props.post._id}>
            <h1>{props.post.title}</h1>
            <br />
            <div>{props.post.user}</div>
            <div>{props.post.text}</div>
            <div>{props.post.price}</div>
            <Button text='Not interested' onClick={displayTitle}></Button>
            <Button text='I want this job'></Button>
        </div>
    );
}

export default Post;
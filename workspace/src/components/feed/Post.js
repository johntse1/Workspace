import React from 'react'
import Button from '../Button';

function Post(props){
    return(
        <div>
            <p>{props.text}</p>
            <Button>Like and subscribe</Button>
            <Button>I want this job</Button>
        </div>
    );
}

export default Post;
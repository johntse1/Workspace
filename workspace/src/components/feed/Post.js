import React from 'react'
import Button from '../Button';

function Post(props){
    return(
        <div>
            <p>{props.text}</p>
            <Button text='Not interested'></Button>
            <Button text='I want this job'></Button>
        </div>
    );
}

export default Post;
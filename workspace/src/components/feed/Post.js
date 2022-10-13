import React from 'react'

function Post(props){
    return(
        <div>
            <p>{props.text}</p>
            <button>Like and subscribe</button>
            <button>I want this job</button>
        </div>
    );
}

export default Post;
import React from 'react'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axios from 'axios'

function ReviewPost(props){
    const displayTitle = () =>{
        console.log(props.post._id)
    }

    return(
        <div key={props.post.id}>
            <h2>{props.post.reviewee}</h2>
            <h3>{props.post.title}</h3>
            <h3>{props.post.rating}/5</h3>
            <div>{props.post.text}</div>
        </div>
    );
}

export default ReviewPost;
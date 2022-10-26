import React from 'react'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axios from 'axios'

function Post(props){
    const displayTitle = () =>{
        console.log(props.post._id)
    }
    const acceptJob = () =>{
        console.log('button clicked')
        let token = localStorage.getItem("JWT_TOKEN")
        axios.post('https://workspace.onrender.com/api/jobs/accept/' + props.post._id,
            {
            },{ headers: { "Authorization": `Bearer ${token}` } })   
        .then( function (response){
          console.log(response.data)
        }).catch(function (error){
          console.log(error.response.status)
        });
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
            <Button text='I want this job' onClick={acceptJob}></Button>
        </div>
    );
}

export default Post;
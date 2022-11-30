import React from 'react'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import './post.css';

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
          toast.dark("Job Accepted")
        }).catch(function (error){
          console.log(error.response.status)
          toast.dark("Job failed to accept")
        });
      }
    return(
        <div key={props.post._id} className='post'>
            <h2 className='stuff'>{props.post.title}</h2>
            <br />
            <Link to={{pathname: '/otherUser', state: props.post.user}} className='stuff'>{props.post.username}</Link>
            <div className='stuff'>{props.post.text}</div>
            <div className='images'>{props.post.images.map(image => <img src={image} className='postImg'/>)}</div>
            <div className='stuff'>Price: ${props.post.price}</div>
            <Button text='I want this job' onClick={acceptJob} className='stuff'></Button>
            <ToastContainer></ToastContainer>

        </div>

    );
}

export default Post;
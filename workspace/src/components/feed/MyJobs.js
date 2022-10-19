import axios from 'axios';
import React from 'react'
import Button from '../Button';
import { Redirect } from 'react-router-dom';

function MyJobs(props){
    const displayTitle = () =>{
        console.log(props)
    }

    const removeJob = () =>{
        let url = 'https://workspace.onrender.com/api/jobs/delete/' + props.post._id
        let token = localStorage.getItem("JWT_TOKEN")
        axios.delete(url, { headers: { "Authorization": `Bearer ${token}` } }).then(function (response) {
            console.log(response)
            props.setRequestData(new Date());
          }).catch(function (error) {
            console.log(error)
        })
        return <Redirect to='/'></Redirect>
    }
    return(
        <div key={props.post._id}>
            <h1>{props.post.title}</h1>
            <div>{props.post.user}</div>
            <div>{props.post.text}</div>
            <div>{props.post.price}</div>
            <Button text='Edit Job' onClick={displayTitle}></Button>
            <Button text='Remove Job' onClick={removeJob}></Button>
        </div>
    );
}

export default MyJobs;

//THIS PAGE WAS MOVED TO DEFAULT PAGE

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Popup from '../components/PopupRegister';
import PopUpCreatePost from '../components/PopUpCreatePost';
import {useHistory} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import Post from '../components/feed/Post.js'
import {Route, Link} from 'react-router-dom'
import CreateJob from '../pages/CreateJob'
import { API_BASE_URL, API_GET_ME } from '../API_ENDPOINTS'
import NavBar from '../components/navigation/NavBar';


function Home(){
  useEffect(() =>{
    loadJob();
  }, []);
  const loadJob = () =>{
    console.log('button clicked')
    let token = localStorage.getItem("JWT_TOKEN")
    axios.get('https://workspace.onrender.com/api/jobs/getall')
    .then( function (response){
      console.log(response.data)
      setItems(response.data)
    }).catch(function (error){
      console.log(error.response.status)
    });
  }
  const [items, setItems] = useState([]);
  return (
       <div className="App">
        <NavBar/>
        <Button text='Refresh Feed' onClick={loadJob}></Button>
        <div>
          {items.map((item) => 
            <Post post={item} key={item._id}></Post>
          )}
        </div>
      </div>
  );
}

export default Home;


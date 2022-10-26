
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
import Feed from '../components/feed/Feed.js'
import {Route, Link} from 'react-router-dom'
import CreateJob from '../pages/CreateJob'
import { API_BASE_URL, API_GET_ME } from '../API_ENDPOINTS'
import NavBar from '../components/navigation/NavBar';


function Home(){
  const [items, setItems] = useState([]);
  const [currItems, setCurrItems] = useState([]);
  const [pageNum, setNum] = useState(0);


  useEffect(() =>{
    loadJob();
  }, []);
  const loadJob = () =>{
    console.log('button clicked')
    let token = localStorage.getItem("JWT_TOKEN")
    axios.get('https://workspace.onrender.com/api/jobs/mytags', { headers: { "Authorization": `Bearer ${token}` } })
    .then( function (response){
      console.log(response.data)
      makePages(response.data)
    }).catch(function (error){
      console.log(error.response.status)
    });
  }

  const makePages = (arr) =>{
    let pageSize = 2
    let tempArr = []
    //console.log(items.length)
    console.log(arr)
    for (let i = 0; i < arr.length; i += pageSize) {
      let page = arr.slice(i, i + pageSize);
      //console.log(page)
      tempArr.push(page)
    }
    setItems(tempArr)
    //console.log(tempArr)
    //console.log('a')
    //console.log(items)
    setCurrItems(tempArr.at(pageNum))
    //console.log(items.at(pageNum))
    //console.log(currItems)
  }
  const nextPage = () =>{
    if(pageNum < items.length - 1){
      setNum(pageNum + 1)
      //loadJob()
      setCurrItems(items.at(pageNum+1))
    }
  }
  const prevPage = () =>{
    if(pageNum > 0){
      setNum(pageNum - 1)
      //loadJob()
      setCurrItems(items.at(pageNum-1))
    }
  }

  return (
       <div className="App">
        <NavBar/>
        <Button text='Refresh Feed' onClick={loadJob}></Button>
        <Feed feed={currItems}></Feed>
        <Button text='Prev Page' onClick={prevPage}></Button>
        {pageNum + 1}
        <Button text='Next Page' onClick={nextPage}></Button>
      </div>
  );
}

export default Home;


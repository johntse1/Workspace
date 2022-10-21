
//THIS PAGE WAS MOVED TO DEFAULT PAGE

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button'

import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'
import {useHistory} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import Post from '../components/feed/Post.js'
import {Route, Link} from 'react-router-dom'
import CreateJob from '../pages/CreateJob'
import { API_BASE_URL, API_GET_ME, API_GET_ALL_JOBS_FILTER } from '../API_ENDPOINTS'
import NavBar from '../components/navigation/workerNavBar';



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
  let skills = 
  [
    {  label: "Construction", value: "Construction" },
    {  label: "Plumbing", value: "Plumbing" },
    {  label: "Electrical", value: "Electrical" },
    {  label: "Mechanical", value: "Mechanical" },
    {  label: "Home", value: "Home" },
    {  label: "Logging", value: "Logging" },
    {  label: "Technical", value: "Technical" },
    {  label: "Roof", value: "Roof" },
  ]
  const handleSelectChange = (e) => {
  let values = []
  e.map((v) => values.push(v.value))
        const fetchData = async () => {
          const response = await axios.get('https://workspace.onrender.com/api/jobs/getall')
          //await axios.get(API_BASE_URL + API_GET_ALL_JOBS_FILTER);
          for(var i = 0;i< response.data.length;i++)
          {
            if(response.data[i].tags == values[0])
            {
              console.log(response.data[i])
              //setItems(response.data[i])
            }
          }
          console.log(response.data[0])
          setItems(response.data[0])
        }
  fetchData();
  }
  return (
       <div className="App">
        <NavBar/>
        <div>
        <Select
              isMulti
              name="colors"
              options={skills}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => handleSelectChange(e)}

            />
        </div>
        <Link to ='/create'><Button text='Create Job Posting'></Button></Link>
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


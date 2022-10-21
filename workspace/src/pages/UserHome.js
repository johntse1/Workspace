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
import CreateJob from './CreateJob'
import { API_BASE_URL, API_GET_ME, API_GET_ALL_JOBS_FILTER } from '../API_ENDPOINTS'
import NavBar from '../components/navigation/userNavBar';



function UserHome(){

  return (
       <div className="App">
        <NavBar/>
        <Link to ='/create'><Button text='Create Job Posting'></Button></Link>
      </div>
  );
}

export default UserHome;


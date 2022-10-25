import React, { useState, useEffect } from 'react'
import Button from '../components/Button'

import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';
import 'react-datepicker/dist/react-datepicker.css'
import {Route, Link} from 'react-router-dom'
import CreateJob from './CreateJob'
import { API_BASE_URL, API_GET_ME, API_GET_ALL_JOBS_FILTER } from '../API_ENDPOINTS'
import NavBar from '../components/navigation/UserNavBar';



function UserHome(){

  return (
       <div className="App">
        <NavBar/>
        <Link to ='/create'><Button text='Create Job Posting'></Button></Link>
      </div>
  );
}

export default UserHome;
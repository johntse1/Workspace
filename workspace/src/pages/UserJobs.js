import React from 'react'
import Post from '../components/feed/Post.js'
import Button from '../components/Button.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { API_BASE_URL, API_GET_ME } from '../API_ENDPOINTS'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import MyJobs from '../components/feed/MyJobs.js'
import NavBar from '../components/navigation/userNavBar';


function UserJobs(){
    const [my_profile, setmy_profile] = useState([
        {
          "first_name": "john",
          "last_name": "tse",
          "email": "placeholder@gmail.com",
          "id": "placeholderid"
        }
      ]);
      const [got_profile,setgot_profile] = useState(null)
      const [active_jobs, setActive_Jobs] = useState([])
      const [requestData, setRequestData] = useState(new Date());

      useEffect(() => {
        const fetchData = async () => {
          let token = localStorage.getItem("JWT_TOKEN")
          const response = await axios.get(API_BASE_URL + API_GET_ME, { headers: { "Authorization": `Bearer ${token}` } });
          const jobsList = await axios.get('https://workspace.onrender.com/api/jobs/get', { headers: { "Authorization": `Bearer ${token}` } })
          setmy_profile(response.data)
          setActive_Jobs(jobsList.data)
          console.log(jobsList.data)
          setgot_profile(true)
        };
        fetchData();
      }, [requestData]);
    
      if (localStorage.getItem('JWT_TOKEN') == null) {
        return <Redirect to="/"></Redirect>
      }
      const checkjwt = async () => {
        if (localStorage.getItem("JWT_TOKEN") != null) {
          let token = localStorage.getItem("JWT_TOKEN")
          axios.get(API_BASE_URL + API_GET_ME, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
              console.log(response)
              setmy_profile(response.data)
              console.log(my_profile)
            })
        }
      }
    return (
        <div>
          <NavBar/>
            <Tabs>
                <TabList>
                    <h1>Jobs Page</h1>
                    <Tab>Current Jobs</Tab>
                    <Tab>Past Jobs</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {active_jobs.map((jobs) => 
                            <MyJobs post={jobs} key={jobs._id} setRequestData={setRequestData}></MyJobs>
                        )}
                    </div>
                </TabPanel>

                <TabPanel>yooo</TabPanel>
            </Tabs>
            
        </div>
    );
}

export default UserJobs;
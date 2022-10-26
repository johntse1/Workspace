import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { API_BASE_URL, API_GET_ME } from '../API_ENDPOINTS'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/navigation/NavBar';


function OtherUser(props){
    //console.log(props.location.state)
    const prof = ['John Tse', '4.5', ['Fixing', 'Cleaning', 'Making'], 'A cool guy', ['Good worker', 'Quick Worker']]
    const [profile, set_profile] = useState([
        {
          "first_name": "john",
          "last_name": "tse",
          "email": "placeholder@gmail.com",
          "id": "placeholderid",
          "contractor" : "placeholdertype"
        }
      ]);
      const [got_profile,setgot_profile] = useState(null)
      
      useEffect(() => {
        const fetchData = async () => {
          let token = localStorage.getItem("JWT_TOKEN")
          const response = await axios.get("https://workspace.onrender.com/api/users/get/" + props.location.state, { headers: { "Authorization": `Bearer ${token}` } });
          set_profile(response.data)
          console.log(response.data)
          setgot_profile(true)
        };
        fetchData();
      }, []);
    return(
        <div>
            <NavBar/>
            <Tabs>
                {/* <h1>{prof[0]}({prof[1]})</h1> */}
                <h1>{profile["first_name"] + " " + profile["last_name"]}'s profile</h1>
                <h2>{profile["email"]}</h2>
                <h2>{profile["id"]}</h2>

                <TabList>
                <Tab>Skills</Tab>
                <Tab>About</Tab>
                <Tab>Reviews</Tab>
                </TabList>

                <TabPanel>
                {/* <h2>{prof[2].map((item, i) => <div key={i}>{item}</div>)}</h2> */}
                {got_profile?  
                <div>
                    {profile["skills"].map((skill) => <h2 key={skill}>{skill}</h2>)}
                </div>: ""}
                



                </TabPanel>
                <TabPanel>
                {/* <h2>{prof[3]}</h2> */}
                <h2> {got_profile? profile["description"]: ""}</h2>

                </TabPanel>
                <TabPanel>
                <h2>{prof[4].map((item, i) => <div key={i}>{item}</div>)}</h2>
                

                </TabPanel>
            </Tabs>
        </div>

    );
}

export default OtherUser;
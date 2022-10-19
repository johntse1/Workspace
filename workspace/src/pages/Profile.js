import {Route, Link} from 'react-router-dom'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { API_BASE_URL, API_GET_ME } from '../API_ENDPOINTS'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const prof = ['John Tse', '4.5', ['Fixing', 'Cleaning', 'Making'], 'A cool guy', ['Good worker', 'Quick Worker']]


function Profile() {
  
  const [my_profile, setmy_profile] = useState([
    {
      "first_name": "john",
      "last_name": "tse",
      "email": "placeholder@gmail.com",
      "id": "placeholderid"
    }
  ]);
  const [got_profile,setgot_profile] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("JWT_TOKEN")
      const response = await axios.get(API_BASE_URL + API_GET_ME, { headers: { "Authorization": `Bearer ${token}` } });
      setmy_profile(response.data)
      console.log(response.data)
      setgot_profile(true)
      
    };
    fetchData();
  }, []);

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
      <Tabs>
        {/* <h1>{prof[0]}({prof[1]})</h1> */}
        <h1>{my_profile["first_name"] + " " + my_profile["last_name"]}</h1>
        <h2>{my_profile["email"]}</h2>
        <h2>{my_profile["id"]}</h2>

        <TabList>
          <Tab>Skills</Tab>
          <Tab>About</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanel>
          {/* <h2>{prof[2].map((item, i) => <div key={i}>{item}</div>)}</h2> */}
          <h2> {got_profile? my_profile["skills"][0] : ""}</h2>


        </TabPanel>
        <TabPanel>
          <h2>{prof[3]}</h2>
          <h2> {got_profile? my_profile["description"]: ""}</h2>
          <form>
            <button>
              
            </button>
          </form>

        </TabPanel>
        <TabPanel>
          <h2>{prof[4].map((item, i) => <div key={i}>{item}</div>)}</h2>
          

        </TabPanel>
      </Tabs>
    </div>
    
  );
}

export default Profile;
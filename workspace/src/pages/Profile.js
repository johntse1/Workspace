import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {API_BASE_URL,API_GET_ME} from '../API_ENDPOINTS'
import axios from 'axios'
import Button from '../components/Button';
import { useState } from 'react';
const prof = ['John Tse','4.5',['Fixing','Cleaning','Making'],'A cool guy',['Good worker','Quick Worker']]

function Profile() {
const [my_profile, setmy_profile] = useState([
{
  "first_name": "john",
  "last_name":"tse",
  "email" : "placeholder@gmail.com",
  "id" :"placeholderid"
}
]);

const checkjwt=()=>{
  const user = []
  if(localStorage.getItem("JWT_TOKEN") !=null)
  {
    let token = localStorage.getItem("JWT_TOKEN")
    axios.get(API_BASE_URL+API_GET_ME, { headers: {"Authorization" : `Bearer ${token}`} })
      .then( (response) => {
        console.log(response)
        setmy_profile(response.data)
        console.log(my_profile)
  })
}

console.log(user)}
 return(
  <div>
    <Button color='black' text='TEMPORARY PROFILE GETME BUTTON' onClick={checkjwt} />

        <Tabs>
            {/* <h1>{prof[0]}({prof[1]})</h1> */}
            <h1>{my_profile["first_name"]+" " +my_profile["last_name"] }</h1>
            <h2>{my_profile["email"]}</h2>
            <h2>{my_profile["id"]}</h2>

          <TabList>
            <Tab>Skills</Tab>
            <Tab>About</Tab>
            <Tab>Reviews</Tab>
          </TabList>
      
          <TabPanel>
            <h2>{prof[2].map((item, i) => <div key={i}>{item}</div>)}</h2>
          </TabPanel>
          <TabPanel>
            <h2>{prof[3]}</h2>

          </TabPanel>
          <TabPanel>
          <h2>{prof[4].map((item, i) => <div key={i}>{item}</div>)}</h2>
          </TabPanel>
        </Tabs>
  </div>
      );
  }

export default Profile;
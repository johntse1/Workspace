import React, { useState } from 'react'
import Popup from '../components/PopupRegister';
import axios from 'axios'
import Button from '../components/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {useNavigate} from "react-router-dom";


function Home(){
  const[register, registerPopup] = useState(false);
  const[createPost, createPostPopup] = useState(false);
  const[USER_EMAIL, setUSER_EMAIL] = useState('')
  const[USER_PASSWORD, setUSER_PASSWORD] = useState('')
  const[JWT_TOKEN,setJWT_TOKEN] = useState('')
  const[SignedIn, setSignedIn] = useState(false)
  const[SignUp,setSignedUp] = useState(false)
  const[USER_NAME, setUSER_NAME] = useState('')

  let API_BASE_URL = 'https://workspace.onrender.com/api/'
  let API_SIGN_IN_URL = 'users/login'
  let API_SIGN_UP_URL  = 'users'
  // let navigate = useNavigate();

  const signin=()=>{
    let url = API_BASE_URL + API_SIGN_IN_URL
    axios.post(url,
      {
        email: USER_EMAIL,
        password: USER_PASSWORD
      })
      .then(function(response){
        console.log(response)
        toast.dark('Sign in successful')
        setSignedIn(true)
      }).catch(function(error){
        console.log(error.response.status)
        // if(error.response.status === 401)
        // {
        //   toast.warning('User was not found')
        // }
        if(error.response.status === 400)
        {
          toast.warning('Invalid Login')
        }
        setSignedIn(false)
      })
  }

  const test=()=>{
    axios.post("https://workspace.onrender.com/api/jobs/getall",
      {
        email: "john@gmail.com",
        password: 123456
      })
      .then(function(response){
        console.log(response)
      })
  }

  const registerUser=()=>{
    let url = API_BASE_URL + API_SIGN_IN_URL
    axios.post(url,
      {
        name: USER_NAME,
        email: USER_EMAIL,
        password: USER_PASSWORD
      })
      .then(function(response){
        console.log(response)
        toast.dark('Sign in successful')
        setSignedIn(true)
      }).catch(function(error){
        console.log(error.response.status)
        if(error.response.status === 400)
        {
          toast.warning('Invalid Login')
        }
        setSignedIn(false)
      })
  }

  
  return (

    
    <div className = 'container'>
      <h1> Log in </h1>
    {(!SignUp && !SignedIn) && <div className='form-control'>
      <label>Email</label>
      <input type ='text' placeholder='Enter your Email' 
      value={USER_EMAIL} 
      onChange={(e) => setUSER_EMAIL(e.target.value)}
      />
    </div>}

    {(!SignUp && !SignedIn) && <div className='form-control'>
      <label>Password</label>
      <input type ='password' placeholder='Enter your Password' 
      value={USER_PASSWORD} 
      onChange={(e) => setUSER_PASSWORD(e.target.value)}
      />
    </div>}

    {SignedIn && <h1> SIGNED IN AT {USER_EMAIL}</h1>}



    {!SignedIn && <Button color='black' text='Sign in' onClick = {signin}/>}

    {!SignedIn && <Button color='black' text='Register instead' onClick = {registerUser}/>}

    <ToastContainer/>
    <div className="App">
            <main>
              <br/><br/>
              <button onClick={()=> registerPopup(true)}>Register</button>
              <br/>
              <button onClick={()=> createPostPopup(true)}>+</button>
            </main>

            <Popup trigger={register} setTrigger={registerPopup}></Popup>
            <Popup trigger={createPost} setTrigger={createPostPopup}></Popup>
          </div> 
    </div>
          
    );
}

export default Home;


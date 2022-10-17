import React, { useState } from 'react'
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

function Login() {
  let history = useHistory()
  const [register, registerPopup] = useState(false);
  const [createPost, createPostPopup] = useState(false);
  const [JWT_TOKEN, setJWT_TOKEN] = useState('')
  const [SignedIn, setSignedIn] = useState(false)

  const [USER_EMAIL, setUSER_EMAIL] = useState('')
  const [USER_PASSWORD, setUSER_PASSWORD] = useState('')
  const [USER_FIRST_NAME, setUSER_FIRST_NAME] = useState('')
  const [USER_LAST_NAME, setUSER_LAST_NAME] = useState('')
  const [USER_BIRTHDAY, setUSER_BIRTHDAY] = useState('')
  const [USER_DESCRIPTION, setUSER_DESCRIPTION] = useState('')


  let API_BASE_URL = 'https://workspace.onrender.com/api/'
  let API_SIGN_IN_URL = 'users/login'
  let API_SIGN_UP_URL = 'users/register'

  const signin = () => {
    let url = API_BASE_URL + API_SIGN_IN_URL
    axios.post(url,
      {
        email: USER_EMAIL,
        password: USER_PASSWORD
      })
      .then(function (response) {
        console.log(response)
        toast.dark('Sign in successful')
        setSignedIn(true)
        setJWT_TOKEN(response.data.token)

        localStorage.setItem('JWT_TOKEN',response.data.token)
        
        //probably navigate to a new page here or smth
        history.push('/profile')
      }).catch(function (error) {
        console.log(error.response.status)
        // if(error.response.status === 401)
        // {
        //   toast.warning('User was not found')
        // }
        if (error.response.status === 400) {
          toast.warning('Invalid Login')
        }
        setSignedIn(false)
      })
  }

  const registerUser = () => {
    let url = API_BASE_URL + API_SIGN_UP_URL
    axios.post(url,
      {
        first_name: USER_FIRST_NAME,
        last_name: USER_LAST_NAME,
        email: USER_EMAIL,
        password: USER_PASSWORD,
        birthday: USER_BIRTHDAY,
      })
      .then(function (response) {
        console.log(response)
        toast.dark('Account successfully registered')
        setJWT_TOKEN(JWT_TOKEN)
        localStorage.setItem('JWT_TOKEN',response.data.token)
        history.push('/profile')

      }).catch(function (error) {
        console.log(error.response.status)
        if (error.response.status === 400) {
          toast.warning('Failed to register')
        }
      })
  }
  const logout =() => {
    localStorage.removeItem("JWT_TOKEN")
  }


  return (
    <div className='container'>

      <Tabs>
        <TabList>
          <Tab>Log in</Tab>
          <Tab>Sign Up</Tab>
        </TabList>

        <TabPanel>
          <div className='form-control'>
            <label>Email</label>
            <input type='text' placeholder='Enter your Email'
              value={USER_EMAIL}
              onChange={(e) => setUSER_EMAIL(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label>Password</label>
            <input type='password' placeholder='Enter your Password'
              value={USER_PASSWORD}
              onChange={(e) => setUSER_PASSWORD(e.target.value)}
            />
          </div>
          <Button color='black' text='Sign in' onClick={signin} />

        </TabPanel>


        <TabPanel>
          <div className='form-control'>
            <label>First Name</label>
            <input type='text' placeholder='Enter your first name'
              value={USER_FIRST_NAME}
              onChange={(e) => setUSER_FIRST_NAME(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label>Last Name</label>
            <input type='text' placeholder='Enter your last name'
              value={USER_LAST_NAME}
              onChange={(e) => setUSER_LAST_NAME(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label>Email</label>
            <input type='text' placeholder='Enter your email'
              value={USER_EMAIL}
              onChange={(e) => setUSER_EMAIL(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label>Password</label>
            <input type='password' placeholder='Enter your Password'
              value={USER_PASSWORD}
              onChange={(e) => setUSER_PASSWORD(e.target.value)}
            />
          </div>

          <div className='form-control'>
          <label>Birthday</label>
            <DatePicker 
            selected={USER_BIRTHDAY} 
            onChange={date => setUSER_BIRTHDAY(date)}
            maxDate = {new Date()}
            isClearable
            showYearDropdown
            placeholderText='Enter your birthday'
            ></DatePicker>
          </div>

        <Button color='black' text='Register' onClick={registerUser} />
        </TabPanel>
      </Tabs>
      <ToastContainer />
    <Button color='black' text='TEMPORARY SIGN OUT BUTTON' onClick={logout} />

    </div>

  );


}

export default Login;
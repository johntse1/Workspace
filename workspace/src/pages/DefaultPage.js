import React, { useState } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Redirect, useHistory, Route, useNavigate, Link} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import Profile from '../pages/Profile'
import Select from 'react-select'
import { useEffect } from 'react';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

function Login() {

  useEffect(() => {
    const getCords = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        let cords = [position.coords.latitude, position.coords.longitude]
        setUSER_COORDINATES(cords)
      })
    };
    getCords();
  }, []);


  let history = useHistory()
  let imgurclient = "ec5fa7976333d6b"
  const [JWT_TOKEN, setJWT_TOKEN] = useState('')
  const [USER_EMAIL, setUSER_EMAIL] = useState('')
  const [USER_PASSWORD, setUSER_PASSWORD] = useState('')
  const [USER_FIRST_NAME, setUSER_FIRST_NAME] = useState('')
  const [USER_LAST_NAME, setUSER_LAST_NAME] = useState('')
  const [USER_BIRTHDAY, setUSER_BIRTHDAY] = useState('')
  const [USER_DESCRIPTION, setUSER_DESCRIPTION] = useState('')
  const [USER_SKILLS, setUSER_SKILLS] = useState([])
  const [USER_CONTRACTOR, setUSER_CONTRACTOR] = useState(false)
  const [USER_COORDINATES, setUSER_COORDINATES] = useState([])
  const [USER_IMAGES, setUSER_IMAGES] = useState()

  const [loading,setLoading] = useState(false);
  const [err,setErr] = useState(false);

  if ((localStorage.getItem('JWT_TOKEN') != null) && USER_CONTRACTOR == true) {
    console.log(USER_CONTRACTOR)
    //return <Redirect to="/profile"></Redirect>
  }
  if ((localStorage.getItem('JWT_TOKEN') != null) && USER_CONTRACTOR == false) {
    return <Redirect to="/userprofile"></Redirect>
  }

  let skills =
    [
      { label: "Construction", value: "Construction" },
      { label: "Plumbing", value: "Plumbing" },
      { label: "Electrical", value: "Electrical" },
      { label: "Mechanical", value: "Mechanical" },
      { label: "Home", value: "Home" },
      { label: "Logging", value: "Logging" },
      { label: "Technical", value: "Technical" },
      { label: "Roof", value: "Roof" },
    ]
  let Contractor =
    [
      { label: "Contractor", value: "true" },
      { label: "User", value: "false" },

    ]

  let API_BASE_URL = 'https://workspace.onrender.com/api/'
  let API_SIGN_IN_URL = 'users/login'
  let API_SIGN_UP_URL = 'users/register'


  
  const signin = () => {
    //This section is used to connect to Firebase
      const email = USER_EMAIL;
      const password = USER_PASSWORD;
      signInWithEmailAndPassword(auth, email, password);
    //End of section used to connection to Firebase
    
    let url = API_BASE_URL + API_SIGN_IN_URL
    axios.post(url,
      {
        email: USER_EMAIL,
        password: USER_PASSWORD
      })
      .then(function (response) {
        console.log(response)
        toast.dark('Sign in successful')
        setJWT_TOKEN(response.data.token)
        localStorage.setItem('JWT_TOKEN', response.data.token)
        localStorage.setItem('contractor', response.data.contractor)
        localStorage.setItem('image', response.data.image)
        //probably navigate to a new page here or smth
        if (response.data.contractor == false) {
          history.push('/userprofile')
        }
        else {
          history.push('/profile')
        }
      }).catch(function (error) {
        console.log(error.response.status)
        if (error.response.status === 400) {
          toast.warning('Invalid Login')
        }
      })
  }

  const registerUser2 = async (e) => {
    const formdata = new FormData()
    formdata.append("image", USER_IMAGES)
    formdata.append("first_name", USER_FIRST_NAME)
    formdata.append("last_name", USER_LAST_NAME)
    formdata.append("email", USER_EMAIL)
    formdata.append("password", USER_PASSWORD)
    formdata.append("birthday", USER_BIRTHDAY)
    formdata.append("description", USER_DESCRIPTION)
    formdata.append("skills", USER_SKILLS)
    formdata.append("contractor", USER_CONTRACTOR)


    //Firebase initialization
    try{
      const displayName = formdata.get('email');
      const email = formdata.get('email');
      const password = formdata.get('password');
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });
  
      await setDoc(doc(db, "userChats", res.user.uid), {});
    }
    catch (err){
      console.log(err);
      setErr(true);
      setLoading(false);
    }
    //End of firebase initialization
    //Works
    axios({
      method: "post",
      url: "https://workspace.onrender.com/api/users/register",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" }
    }).then(function (response) {
      console.log(response)
      toast.dark('Account successfully registered')
      localStorage.setItem('JWT_TOKEN', response.data.token)
      localStorage.setItem('contractor', response.data.contractor)
      localStorage.setItem('image', response.data.image)

      if (response.data.contractor == false) {
        history.push('/userprofile')
      }
      else {
        history.push('/profile')
      }

    }).catch(function (error) {
      console.log(error.response.status)
      if (error.response.status === 400) {
        toast.warning('Email already exists')
      }

      if (error.response.status === 401) {
        toast.warning('Please enter all fields')
      }
    })
  }

  const handleSelectChange = (e) => {
    let values = []
    e.map((v) => values.push(v.value))
    setUSER_SKILLS(values)
    console.log(USER_SKILLS)
  }

  const handleSelectChangeCon = (e) => {
    console.log(e)
    setUSER_CONTRACTOR(e.value)
    console.log(USER_CONTRACTOR)
  }

  const imagechangeHandler = (e) => {
    setUSER_IMAGES(e.target.files[0])
    console.log(USER_IMAGES)
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
            <label>What are you?</label>
            <Select
              name="Contractor"
              options={Contractor}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => handleSelectChangeCon(e)}
            />
          </div>

          <div className='form-control'>
            <label>Birthday</label>
            <DatePicker
              selected={USER_BIRTHDAY}
              onChange={date => setUSER_BIRTHDAY(date)}
              maxDate={new Date()}
              isClearable
              showYearDropdown
              placeholderText='Enter your birthday'
            ></DatePicker>
          </div>

          <div className='form-control'>
            <label>Description</label>
            <form>
              <textarea type='text'
                placeholder='Enter a description (optional)'
                value={USER_DESCRIPTION}
                onChange={(e) => setUSER_DESCRIPTION(e.target.value)}
                maxLength="200"
                rows={5}
              />
            </form>
          </div>

          <div className='form-control'>
            <label>Skills</label>
            <Select
              isMulti
              name="colors"
              options={skills}
              className="basic-single"
              classNamePrefix="select"
              onChange={(e) => handleSelectChange(e)}

            />
          </div>
          <div className='form-control'>
            <label>Profile Pictures</label>
            <input type="file" name="image" onChange={imagechangeHandler} multiple={false}
            />
          </div>
          <Button color='black' text='Register' onClick={registerUser2} />
          {/* <Button color='black' text='test' onClick={registerUser2} /> */}

        </TabPanel>
      </Tabs>
      <ToastContainer />
    </div>
  );
}

export default Login;
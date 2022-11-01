import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import Button from '../components/Button'
import axios from 'axios'
import { Redirect, useHistory, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { API_SET_JOB, API_BASE_URL, API_GET_ME, API_GET_ALL_JOBS } from '../API_ENDPOINTS'


function CreateJob() {




  // useEffect(() => {
  //   const fetchData = async () => {
  //     let token = localStorage.getItem("JWT_TOKEN")
  //     const response = await axios.get(API_BASE_URL + API_SET_JOB, { headers: { "Authorization": `Bearer ${token}` } });
  //     console.log(response.data)
  //     setgot_profile(true)
  //   };
  //   fetchData();
  // }, []);

  let history = useHistory()

  const [got_profile, setgot_profile] = useState(null)
  const [JWT_TOKEN, setJWT_TOKEN] = useState('')
  const [POST_ID, setPOST_ID] = useState('')
  const [USER_ID, setUSER_ID] = useState('')
  const [USER_TITLE, setUSER_TITLE] = useState('')
  const [USER_PRICE, setUSER_PRICE] = useState('')
  const [USER_POST_DESCRIPTION, setUSER_POST_DESCRIPTION] = useState('')
  const [USER_TAGS, setUSER_TAGS] = useState([])
  const [USER_ADDRESS, setUSER_ADDRESS] = useState('')
  if (localStorage.getItem('JWT_TOKEN') == null) {
    return <Redirect to="/"></Redirect>
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
  let url = 'https://workspace.onrender.com/api/jobs/set'

  // const setJobsWithLoc = () => {
  //     let token = localStorage.getItem("JWT_TOKEN")
  //     let base_url = "https://maps.googleapis.com/maps/api/geocode/json?"
  //     let params = {
  //       'key':process.env.REACT_APP_GOOGLE_API_KEY,
  //       'address': USER_ADDRESS
  //     } 

  //     axios.get(base_url, {params})
  //     .then(function (response) {
  //       console.log(response)
  //       let lat = response.data.results[0].geometry.location.lat
  //       let lon = response.data.results[0].geometry.location.lng
  //       console.log(lat,lon)
  //       let latlon = [lat,lon]
  //       axios.post(url,
  //         {
  //           title:USER_TITLE,
  //           user: USER_ID,
  //           text:USER_POST_DESCRIPTION,
  //           price:USER_PRICE,
  //           tags:USER_TAGS,
  //           location: latlon,
  //           address: USER_ADDRESS
  //         },{ headers: { "Authorization": `Bearer ${token}` } })    
  //         .then(function (response) {
  //           console.log(response)
  //           history.push('/userjobs')
  //         }).catch(function (error) {
  //           console.log(error.response.status)
  //       })
  //     }).catch(function (error) {
  //       //if google api fails
  //       console.log(error.response)
  //       toast.error('Enter a new address')
  //     })    
  //   }
  const setJobs = () => {
    let token = localStorage.getItem("JWT_TOKEN")
    axios.post(url,
      {
        title: USER_TITLE,
        user: USER_ID,
        text: USER_POST_DESCRIPTION,
        price: USER_PRICE,
        tags: USER_TAGS,
        address: USER_ADDRESS
      }, { headers: { "Authorization": `Bearer ${token}` } })
      .then(function (response) {
        console.log(response)
        history.push('/userjobs')
      }).catch(function (error) {
        console.log(error.response.status)
      })
  }

  const handleSelectChange = (e) => {
    let values = []
    e.map((v) => values.push(v.value))
    setUSER_TAGS(values)
    console.log(USER_TAGS)
  }
  return (
    <div className='container'>
      <div className='form-control'>
        <label>Job Name</label>
        <input type='text' placeholder='Enter the job name'
          value={USER_TITLE}
          onChange={(e) => setUSER_TITLE(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Payment</label>
        <input type='number' placeholder='Enter payment amount'
          value={USER_PRICE}
          onChange={(e) => setUSER_PRICE(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Enter a location</label>
        <input type='text' placeholder='Enter the location of the job'
          value={USER_ADDRESS}
          onChange={(e) => setUSER_ADDRESS(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Description</label>
        <form>
          <textarea type='text'
            placeholder='Enter a description (optional)'
            maxLength="200"
            rows={5}
            value={USER_POST_DESCRIPTION}
            onChange={(e) => setUSER_POST_DESCRIPTION(e.target.value)}
          />
        </form>
      </div>

      <div className='form-control'>
        <label>Tags</label>
        <Select
          isMulti
          name="colors"
          options={skills}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e) => handleSelectChange(e)}

        />
      </div>

      <Button text='Submit' onClick={setJobs} ></Button>
      {/* <Button color='black' text='test' onClick={setJobstest} /> */}



      <ToastContainer />
    </div>

  );
}

export default CreateJob;
import React, { useState } from 'react'
import Popup from '../components/PopupRegister';
import axios from 'axios'
import Button from '../components/Button'
function Home(){
  const[register, registerPopup] = useState(false);
  const[createPost, createPostPopup] = useState(false);
  const[USER_EMAIL, setUSER_EMAIL] = useState('')
  const[USER_PASSWORD, setUSER_PASSWORD] = useState('')

  let API_BASE_URL = 'https://workspace.onrender.com/api/'
  let API_SIGN_IN_URL = 'users/login'

  const signup=()=>{

  }
  const signin=()=>{
    let url = API_BASE_URL + API_SIGN_IN_URL
    axios.post(url,
      {
        email: USER_EMAIL,
        password: USER_PASSWORD
      })
      .then(function(response){
        console.log(response)
        console.log("ran")
      }).catch(function(error){
        console.log(error.response.status)
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
  return (
    <div className = 'container'>
    <div className='form-control'>
      <label>Sign In</label>
      <input type ='text' placeholder='Enter your Email' 
      value={USER_EMAIL} 
      onChange={(e) => setUSER_EMAIL(e.target.value)}
      />
      
    </div>
    <div className='form-control'>
      <label>Password</label>
      <input type ='password' placeholder='Enter your Password' 
      value={USER_PASSWORD} 
      onChange={(e) => setUSER_PASSWORD(e.target.value)}
      />
    </div>

    <Button color='black' text='Sign in' onClick = {signin}/>

    </div>
  );

    // return(
    // <div>
    //     <h1>LOGIN</h1>

        
    //       <div className="App">
    //         <main>
    //           <br/><br/>
    //           <button onClick={()=> registerPopup(true)}>Register</button>
    //           <br/>
    //           <button onClick={()=> createPostPopup(true)}>+</button>
    //         </main>

    //         <Popup trigger={register} setTrigger={registerPopup}></Popup>
    //         <Popup trigger={createPost} setTrigger={createPostPopup}></Popup>
    //       </div> 
        

          
    // </div>
    // );
}

export default Home;


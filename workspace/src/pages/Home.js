import React from 'react'
import DatePicker from 'react-date-picker'

function Home(){
    return(
    <div>
        <h1>LOGIN</h1>
        <form>
          <label for="fname">First Name:</label>
          <input type="text" id="fname" name="fname"></input><br/>

          <label for="lname">Last Name:</label>
          <input type="text" id="lname" name="lname"></input><br/>
          


          <label for="uname">Username</label>
          <input type="text" id="uname" name="uname"></input><br/>
          
          <label for="uname">Password</label>
          <input type="text" id="pword" name="pword"></input><br/>
          
          <input type="submit" value="Submit"></input>
        </form>
    </div>
    );
}

export default Home;
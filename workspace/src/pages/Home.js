import React from 'react'

function Home(){
    return(
    <div>
        <h1>LOGIN</h1>
        <form>
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
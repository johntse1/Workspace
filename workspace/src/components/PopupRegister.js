import React from 'react'
import './Popup.css'
function Popup(props) {
  return (props.trigger) ? (
      <div className="popup">
          <div className="popup-inner">
              <button className="close-btn" onClick={()=>props.setTrigger(false)}>close</button>
              {props.children}
            <br/><br/>
            <form>
                <label for="fname">First Name:</label>
                <input type="text" id="fname" name="fname"></input><br/>

                <label for="lname">Last Name:</label>
                <input type="text" id="lname" name="lname"></input><br/>

                <label for="bdate">Birthday:</label>
                <input type="date" id="bdate" name="bdate"></input><br/>

                <label for="uname">Username:</label>
                <input type="text" id="uname" name="uname"></input><br/>
                
                <label for="uname">Password:</label>
                <input type="password" id="pword" name="pword"></input><br/>
                
                <input type="submit" value="Submit"></input>
            </form>
          </div>
      </div>
  ) : "";
}

export default Popup

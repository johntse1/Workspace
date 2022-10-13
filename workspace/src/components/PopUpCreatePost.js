import React from 'react'
import './Popup.css'
function PopUpCreatePost(trigger) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close' onClick={()=>props.setTrigger(false)}>close</button>
            {props.children}
            <br/><br/>
            <form>
                <label for="postName">Title:</label>
                <input type="text" id="title" name="title"></input>

                <label for="cost">Cost:</label>
                <input type="number" id="cost" name="cost"></input>
            </form>
        </div>
    </div>
  ) :"";
}

export default PopUpCreatePost

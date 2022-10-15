import React from 'react'
import Button from './Button';
import './Popup.css'
function PopUpCreatePost(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <Button className='close' text='Close' onClick={()=>props.setTrigger(false)}></Button>
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

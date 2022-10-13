import React, { useState } from 'react'
import Popup from '../components/PopupRegister';

function Home(){
  const[register, registerPopup] = useState(false);
  const[createPost, createPostPopup] = useState(false);
    return(
    <div>
        <h1>LOGIN</h1>
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
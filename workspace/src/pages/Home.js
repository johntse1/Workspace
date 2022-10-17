
//THIS PAGE WAS MOVED TO DEFAULT PAGE

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

function Home() {
  const [createPost, createPostPopup] = useState(false);

  return (
      <div className="App">
        <main>
          <br /><br />
          <Button text='+' onClick={() => createPostPopup(true)}></Button>
        </main>
        <PopUpCreatePost trigger={createPost} setTrigger={createPostPopup}></PopUpCreatePost>
      </div>
  );
}

export default Home;


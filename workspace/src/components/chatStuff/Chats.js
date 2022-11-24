import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../../firebase";

import { API_BASE_URL, API_GET_ME } from '../../API_ENDPOINTS'
import axios from 'axios'

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { dispatch } = useContext(ChatContext);

  const [my_profile, setmy_profile] = useState([
    {
      "first_name": "john",
      "last_name": "tse",
      "email": "placeholder@gmail.com",
      "id": "placeholderid",
      "contractor" : "placeholdertype"
    }
  ]);
  
  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("JWT_TOKEN")
      const response = await axios.get("https://workspace.onrender.com/api/users/me", { headers: { "Authorization": `Bearer ${token}` } });
      setmy_profile(response.data)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", my_profile.id), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    my_profile.id && getChats();
  }, [my_profile.id]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
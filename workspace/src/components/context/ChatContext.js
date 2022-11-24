import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { AuthContext } from "./AuthContext";
import { API_BASE_URL, API_GET_ME } from '../../API_ENDPOINTS'
import axios from 'axios'
import { useEffect, useState } from 'react';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
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

  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            my_profile.id > action.payload.uid
              ? my_profile.id + action.payload.uid
              : action.payload.uid + my_profile.id,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

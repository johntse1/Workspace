import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

import { API_BASE_URL, API_GET_ME } from '../../API_ENDPOINTS'
import axios from 'axios'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
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

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (my_profile) => {
      setCurrentUser(my_profile);
      console.log(my_profile);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

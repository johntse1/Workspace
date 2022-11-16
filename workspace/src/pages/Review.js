import React from 'react'
import Button from '../components/Button';
import {Link} from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/navigation/NavBar';
import UserNavBar from '../components/navigation/UserNavBar';

function Review(props){
    const displayTitle = () =>{
        console.log(props)
    }
    const navBar = () =>{
        let contBool = localStorage.getItem('contractor')
        if(contBool){
          return <UserNavBar/>
        }
        else{
          return <NavBar/>
        }
      }
    return(
        <div>
            <Button text='feafawef' onClick={displayTitle}></Button>
        </div>
    );
}

export default Review;
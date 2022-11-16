import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { Redirect, useHistory, Route, Link } from "react-router-dom";
import axios from 'axios'
import NavBar from '../components/navigation/NavBar';
import UserNavBar from '../components/navigation/UserNavBar';
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../components/reviewStuff/ratingStyles";

function Review(props){
    const [REVIEW_TITLE, setREVIEW_TITLE] = useState('')
    const [REVIEW_DESCRIPTION, setREVIEW_DESCRIPTION] = useState('')
    const [rate, setRate] = useState(1);

    let url = 'https://workspace.onrender.com/api/reviews/create/'
    let history = useHistory()

    if (localStorage.getItem('JWT_TOKEN') == null) {
        return <Redirect to="/"></Redirect>
      }
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
      const setReview = () => {
        let token = localStorage.getItem("JWT_TOKEN")
        console.log(url + props.location.state)
        axios.post(url + props.location.state,
        {
            title: REVIEW_TITLE,
            text: REVIEW_DESCRIPTION,
            rating: rate
        }, { headers: { "Authorization": `Bearer ${token}` } })
        .then(function (response) {
            console.log(response)
            //history.goBack()
        }).catch(function (error) {
            console.log(error.response)
        })
      }

    return(
        <div>
            <div>{navBar()}</div>
            <div className='container'>
            
                <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Enter review title'
                    value={REVIEW_TITLE}
                    onChange={(e) => setREVIEW_TITLE(e.target.value)}
                />
                </div>

                <div className='form-control'>
                <label>Text</label>
                <form>
                    <textarea type='text'
                    placeholder='Enter a description (optional)'
                    maxLength="200"
                    rows={5}
                    value={REVIEW_DESCRIPTION}
                    onChange={(e) => setREVIEW_DESCRIPTION(e.target.value)}
                    />
                </form>
                </div>
                <Container>
                    {[...Array(5)].map((item, index) => {
                    const givenRating = index + 1;
                    return (
                    <label>
                        <Radio
                        type="radio"
                        value={givenRating}
                        onClick={() => {
                            setRate(givenRating);
                        }}
                        />
                            <Rating>
                                <FaStar
                                    color={
                                        givenRating < rate || givenRating == rate
                                        ? "rgb(255,215,0)"
                                        : "rgb(192,192,192)"
                                    }
                                />
                            </Rating>
                            </label>
                        );
                    })}
                </Container>
                <Button text='Submit' onClick={setReview} ></Button>
            </div>
        </div>
    );
}

export default Review;
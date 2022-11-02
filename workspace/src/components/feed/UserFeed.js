import React from 'react'
import Button from '../Button';
import User from './User.js'

function UserFeed(props){
    return(
        <div>
          {props.feed.map((item) => 
            <User post={item} key={item._id}></User>
          )}
        </div>

    );
}

export default UserFeed;
import React from 'react'
import Button from '../Button';
import Post from './Post.js'
import './feed.css';

function Feed(props){
    return(
        <div class='feed'>
          {props.feed.map((item) => 
            <Post post={item} key={item._id}></Post>
          )}
        </div>

    );
}

export default Feed;
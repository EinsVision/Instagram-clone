import React, { useState } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

function Post({username, caption, imageUrl}) {
  const [comments, setComments] = useState();
  
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt='einsvision'
          src='https://avatars.githubusercontent.com/u/63795065?s=400&u=c900a07728731adf5205b847b56f6d3f0b7f979b&v=4' 
        />
        <h3>{username}</h3>
      </div>
      
      {/* header -> avatar + username */}

      <img
        className='post__image'
        src={imageUrl} 
        alt=''
      />
      {/* image */}

      {/* username + caption */}
      <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default Post

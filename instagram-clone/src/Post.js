import React from 'react';
import './Post.css'

function Post() {
  return (
    <div className='post'>
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img
        className='post__image'
        src='https://hackernoon.com/images/z2xg2bpo.jpg' 
        alt=''
      />
      {/* image */}

      {/* username + caption */}
      <h4 className='post__text'><strong>jcdlove</strong> : Reactjs is amzaing!</h4>
    </div>
  )
}

export default Post

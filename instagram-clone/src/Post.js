import React, { useEffect, useState } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import { db } from './firebase';

function Post({postId, username, caption, imageUrl}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect( () => {
    let unsubscribe;
    if ( postId ) {
      unsubscribe = db
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map( (doc)=>doc.data() ) );
      });
    }

    return () => {
      unsubscribe();
    };

  }, [postId]);

  const postComment = (event) => {

  }

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

      <img
        className='post__image'
        src={imageUrl} 
        alt=''
      />
      
      <h4 className='post__text'><strong>{username}</strong> {caption}</h4>

      <form>
        <input
          className='post__input'
          type='text'
          placeholder='Add a comment...'
          value={comment} 
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          disabled={!comment}
          className='post__button'
          type='submit'
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Post

import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';
import Modal from '@material-ui/core/Modal';
import { Button, Input, makeStyles } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added in this code
      setPosts(snapshot.docs.map( doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    });
  }, []); // perform once.

  const signUp = (event) => {
    // event.preventDefault();
  }
  
  return (
    <div className="app">
      <Modal
        open={open}
        onClose={ () => setOpen(false) }
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app_signup'>
            <center>
              <img  className='app__headerImage'
                  src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png' 
                  alt=''
              />
            </center>
            <Input 
              type='text'
              placeholder='username'
              value={username}
              onChange={ (e) => setUsername(e.target.value) }
            />
            <Input 
              type='text'
              placeholder='email'
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
            <Input 
              type='text'
              placeholder='password'
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
            />
            <Button onClick={signUp}>Login</Button>
          </form>          
        </div>
      </Modal>

      <div className='app__header'>
        <img  className='app__headerImage'
              src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png' 
              alt=''
        />
      </div>

      <Button onClick={ () => setOpen(true) }>Sign up</Button>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;

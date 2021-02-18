import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core';

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [posts, setPosts] = useState([
    // {
    //   username : 'einsvision', 
    //   caption: 'WOW it works.', 
    //   imageUrl : 'https://hackernoon.com/images/z2xg2bpo.jpg'
    // },
    // {
    //   username:'jcdlove', 
    //   caption:'Instagram clone coding.', 
    //   imageUrl : 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/family-of-four-7101-90ebbf35ea8e9b9d264dbb2ab724bc4e@1x.jpg'
    // },
    // {
    //   username:'messi', 
    //   caption:'Soccer is my life.', 
    //   imageUrl : 'https://wwmt.com/resources/media/3621b7b3-8e3e-4167-9e38-da94fa9ca069-large16x9_AP20190736080736.jpg?1594337025526'
    // }
  ]);
  const [open, setOpen] = useState(false);
  
  // useEffect -> runs a piece of code based on a specific condition
  
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added in this code
      setPosts(snapshot.docs.map( doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    });
  }, []); // perform once.
  
  return (
    <div className="app">
      <Modal
        open={open}
        onClose={ () => setOpen(false) }
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a model</h2>
        </div>
      </Modal>

      <div className='app__header'>
        <img  className='app__headerImage'
              src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png' 
              alt=''
        />
      </div>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;

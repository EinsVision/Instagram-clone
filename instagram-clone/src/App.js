import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className='app__header'>
        <img  className='app__headerImage'
              src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png' 
              alt=''
        />
      </div>
      <Post username='einsvision' caption='WOW it works.' imageUrl='https://hackernoon.com/images/z2xg2bpo.jpg'/>
      <Post username='jcdlove' caption='Instagram clone coding.'/>
      <Post username='egoing' caption='i am a helper in the world.'/>
    </div>
  );
}

export default App;

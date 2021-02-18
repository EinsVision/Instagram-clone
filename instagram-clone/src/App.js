import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username : 'einsvision', 
      caption: 'WOW it works.', 
      imageUrl : 'https://hackernoon.com/images/z2xg2bpo.jpg'
    },
    {
      username:'jcdlove', 
      caption:'Instagram clone coding.', 
      imageUrl : 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/family-of-four-7101-90ebbf35ea8e9b9d264dbb2ab724bc4e@1x.jpg'
    },
    {
      username:'messi', 
      caption:'Soccer is my life.', 
      imageUrl : 'https://wwmt.com/resources/media/3621b7b3-8e3e-4167-9e38-da94fa9ca069-large16x9_AP20190736080736.jpg?1594337025526'
    }
  ]);
  
  return (
    <div className="app">
      <div className='app__header'>
        <img  className='app__headerImage'
              src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png' 
              alt=''
        />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;

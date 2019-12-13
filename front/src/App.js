import React, { useState } from 'react';
import './App.css';
import './components/post/post'
import Post from './components/post/post';
import NewPostArea from './components/post/newPostArea';

function App() {

  const [posts, setPosts] = useState([]);
  let newPost;
  
  function GetPost(val)
  {
    newPost=val;
    setPosts(prevState=>[...prevState, newPost]);
  }
  return (
    <div>
      <NewPostArea onAdd={GetPost} />
      

      {
        posts.map(elem =><Post Text={elem}/>)
      }
    </div>
  );
}

export default App;

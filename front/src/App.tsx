import React, {
  useState
} from 'react';
import './components/post/post';
import Post from './components/post/post';
import NewPostArea from './components/post/newPostArea';
import SideBarPanel from './components/sidebar/sideBarPanel.jsx';
import About from './components/post/about.jsx';
import Register from './components/auth/register';
import LogIn from './components/auth/login.jsx';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App():JSX.Element {

  const [posts, setPosts] = useState<string[]>([]);
  let newPost:string ="";

  function GetPost(val) {
    newPost = val;
    setPosts(prevState => [...prevState, newPost]);
  }
  return (
    <div className="middle" >

      <Router >
        <div>
          <SideBarPanel />
          <Switch>
            <Route path='/' exact>
              <div >
                <NewPostArea onAdd={
                  GetPost
                }
                /> {
                  posts.map(elem => < Post Text={
                    elem
                  }
                  />)
                }
              </div>
            </Route >
            <Route exact path='/profile'>
              <About />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/login'>
                <LogIn />
            </Route>
          </Switch>
        </div>
      </ Router>
    </div >
  );
}

export default App;

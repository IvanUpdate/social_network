import logo from './logo.svg';
import './App.css';

import React from "react";


function App() {
  return (
    <div className = 'app-wrapper'>
      <header className = 'header'>
          <div>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"/>
          </div>
      </header>
      <nav className = 'nav'>
          <div>
            <a href = "https://google.com">Profile</a>
          </div>
          <div>
          <a>Messages</a>
          </div>
          <div>
              <a>News</a>
          </div>
          <div>
              <a>Music</a>
          </div>
          <div>
              <a>Settings</a>
          </div>
      </nav>
      <div className = 'content'>
          <div>
            <img src = 'https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'/>
          </div>
          <div>
              ava+description
          </div>
          <div>
             My Posts
              <div>
                  New Post
              </div>
              <div>
                  <div>
                      Post1
                  </div>
                  <div>
                      Post2
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}

export default App;
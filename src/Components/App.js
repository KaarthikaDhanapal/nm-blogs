import React from 'react';
// eslint-disable-next-line to the line before.
import logo from '../logo.svg';
import '../Styles/App.css';
import NavigationBar from './NavigationBar.js'
import WritePost from './WritePost.js'
import Feed from './Feed.js'

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <div className="app-container"> 
        <WritePost />
        <Feed />
      </div>
    </div>
  );
}

export default App;

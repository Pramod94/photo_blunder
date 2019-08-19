import React, { Component } from 'react';
import './App.css';
import MyPhotos from './Components/MyPhotos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Photo Blender</h3>
        <MyPhotos />
      </div>
    );
  }
}

export default App;

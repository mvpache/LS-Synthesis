import React, { Component } from 'react';
import ItemDisplay from './components/itemDisplay.js';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Home!
        <ItemDisplay />
      </div>
    );
  }
}

export default App;

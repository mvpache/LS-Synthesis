import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Home
        <br/>
        <Link to="/items">Headphone Wish List</Link>
        <br/>
        <Link to="/new-item">Add a pair of cans</Link>
      </div>
    );
  }
}

export default App;

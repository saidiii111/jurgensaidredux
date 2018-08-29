import React, { Component } from 'react';
import Productlist from './components/Productlist'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to Shopping Cart</h1>
        </header>
        <Productlist />
      </div>
    );
  }
}

export default App;

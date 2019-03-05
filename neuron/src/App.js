import React, { Component } from 'react';
import logo from './images/Logo.png';
import './App.css';
import Table from './Table.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="" className="App-logo"/>
          <div>
            <Table />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

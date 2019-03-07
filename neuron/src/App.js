import React, { Component } from 'react';
import logo from './images/Logo.png';
import './App.css';
import Table from './Table.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      class: "Button"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const state = this.state.class;
    (state === "Button" ? this.setState({class: "Button-clicked"}) : this.setState({class: "Button"}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="" className="App-logo"/>
          <button onClick={this.handleClick} className={this.state.class}>Manual <span>Auto</span></button>
          <div>
            <Table />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './images/Logo.png';
import './App.css';
import TableManual from './TableManual';
import TableAuto from './TableAuto.js';
import Outlines from './Outlines';
import { Button } from '@material-ui/core';

const style = {
	expBtn: {
		color: 'white',
		position: 'fixed',
		left: 0,
		top: 0
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			class: 'Button'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const state = this.state.class;
		state === 'Button' ? this.setState({ class: 'Button-clicked' }) : this.setState({ class: 'Button' });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Button id="expBtn" style={style.expBtn}>
						Explanation
					</Button>
					<img src={logo} alt="" className="App-logo" />
					<button onClick={this.handleClick} className={this.state.class}>
						Manual <span>Auto</span>
					</button>
					{this.state.class === 'Button' ? (
						<div>
							<TableManual />
						</div>
					) : (
						<TableAuto />
					)}
					<Outlines className="OutlinesPos" />
				</header>
			</div>
		);
	}
}

export default App;

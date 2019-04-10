import React, { Component } from 'react';
import logo from './images/Logo.png';
import './App.css';
import TableManual from './TableManual';
import TableAuto from './TableAuto.js';
import Outlines from './Outlines';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	expBtn: {
		color: 'white',
		width: 50,
		height: 50,
		backgroundColor: 'rgba(45, 25, 107, 1)',
		position: 'fixed',
		right: 25,
		bottom: 25,
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		'&:hover': {}
	},
	'@media (max-width: 480px)': {
		expBtn: {
			right: 5,
			bottom: 5
		}
	}
});

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
		const { classes } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} alt="" className="App-logo" />
					<button onClick={this.handleClick} className={this.state.class}>
						Manual <span>Auto</span>
					</button>
					{this.state.class === 'Button' ? <TableManual /> : <TableAuto />}
					<IconButton id="expBtn" className={classes.expBtn}>
						?
					</IconButton>
					<Outlines className="OutlinesPos" />
				</header>
			</div>
		);
	}
}

export default withStyles(styles)(App);

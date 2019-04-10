import React from 'react';
import { Paper, Button } from '@material-ui/core';
import './App.css';

const styles = {
	Paper: {
		background: 'rgba(45, 25, 107, 0.9)'
	},
	Button: {
		position: 'absolute',
		right: 0,
		color: 'white'
	}
};

export default function Outlines() {
	return (
		<Paper className="Outlines" style={styles.Paper} id="paper1">
			<Button id="paperBtn" className="outlineBtn" style={styles.Button}>
				X
			</Button>
			<h1 style={{ color: '#000000' }}>Hello</h1>
		</Paper>
	);
}

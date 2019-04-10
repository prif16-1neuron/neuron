import React from 'react';
import { Paper, Button } from '@material-ui/core';
import './App.css';

const styles = {
	Paper: {
		background: 'rgba(0, 0, 0, 0.8)',
		borderRadius: 0
	},
	Button: {
		position: 'absolute',
		right: 0,
		color: 'white',
		width: 75,
		height: 75,
		fontSize: '1.5rem',
		zIndex: 1
	}
};

export default function Outlines() {
	return (
		<Paper className="Outlines" style={styles.Paper} id="paper1">
			<Button id="paperBtn" className="outlineBtn" style={styles.Button}>
				X
			</Button>
			<div className="menu">
				<div>
					<div>
						<ul>
							<li>
								<a href="#">Welcome to Neuron Teaching Application</a>
							</li>
							<li>
								<a href="#">
									Here you will be able to teach your neuron network manually and automatically
								</a>
							</li>
							<li>
								<a href="#">
									In “Manual” window everything is in your hands. You can type in X1 and X2 values and
									try to guess weight W0, W1 and W2.
								</a>
							</li>
							<li>
								<a href="#">
									“Auto” window gives you more advanced options. Firstly, all weights can be
									calculated by application. Despite that you are also able to add X3 column, output
									layer (algorithm used for learning), iteration length and learning rate (precision).
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Paper>
	);
}

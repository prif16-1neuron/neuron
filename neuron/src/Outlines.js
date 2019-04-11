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
								<p alt="#">Welcome to Neuron Teaching Application</p>
							</li>
							<li>
								<p alt="#">
									Here you will be able to teach your neuron network manually and automatically
								</p>
							</li>
							<li>
								<p alt="#">
									In “Manual” window everything is in your hands. You can type in X1 and X2 values and
									try to guess weight W0, W1 and W2.
								</p>
							</li>
							<li>
								<p alt="#">
									“Auto” window gives you more advanced options. Firstly, all weights can be
									calculated by application. Despite that you are also able to add X3 column, output
									layer (algorithm used for learning), iteration length and learning rate (precision).
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Paper>
	);
}

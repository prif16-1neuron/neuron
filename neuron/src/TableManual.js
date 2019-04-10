import React, { Component } from 'react';
import 'react-table/react-table.css';
import { data } from './Utils';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
	root: {
		width: '99vw',
		height: '55vh',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		backgroundColor: 'transparent'
	},
	table: {
		width: '50vw',
		position: 'relative',
		margin: 'auto',
		borderTop: '1px solid white',
		borderLeft: '1px solid white',
		borderRight: '1px solid white'
	},
	'@media (max-width: 480px)': {
		table: {
			transform: 'scale(0.6)',
			transformOrigin: '5%'
		},
		root: {
			maxWidth: 'auto',
			height: 'auto'
		}
	},
	font: {
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		fontSize: '1.5rem',
		fontWeight: 500,
		borderLeft: '1px solid white',
		align: 'center',
		backgroundColor: 'rgba(45, 25, 107, 0.6)'
	},
	fontEditable: {
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		fontSize: '1.5rem',
		fontWeight: 500,
		borderLeft: '1px solid white',
		align: 'center',
		backgroundColor: 'transparent'
	},
	Input: {
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		fontSize: '1.5rem',
		fontWeight: 500,
		backgroundColor: 'transparent',
		marginLeft: 30,
		width: 65,
		padding: 0
	},
	InputOfX: {
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		fontSize: '1.5rem',
		fontWeight: 500,
		backgroundColor: 'transparent',
		marginLeft: 30,
		width: 45,
		padding: 0
	}
});

class Table1 extends Component {
	constructor() {
		super();
		this.state = {
			data: data,
			isLoading: false,
			open: false,
			message: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	async fetchData() {
		try {
			const response = await fetch(`https://powerful-beyond-88239.herokuapp.com/v1/calculate`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.state.data)
			});
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const json = await response.json();
			let temp = [...this.state.data.data];
			for (let i = 0; i < temp.length; i++) {
				temp[i].t = parseInt(json[i]['t']);
			}
			this.setState({
				data: { data: temp },
				isLoading: false
			});
		} catch (error) {
			this.setState({ error, isLoading: false });
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	handleChange = row => event => {
		let temp = [...this.state.data.data];
		let column = event.target.id;
		if (column === 'w0' || column === 'w1' || column === 'w2') {
			if (column === 'w0' && (event.target.value < -15 || event.target.value > 15)) {
				this.setState({ open: true, message: 'Incorrect value of W0' });
			} else if (column === 'w1' && (event.target.value < -15 || event.target.value > 15)) {
				this.setState({ open: true, message: 'Incorrect value of W1' });
			} else if (column === 'w2' && (event.target.value < -15 || event.target.value > 15)) {
				this.setState({ open: true, message: 'Incorrect value of W2' });
			} else {
				for (let i = 0; i < temp.length; i++) temp[i][column] = parseFloat(event.target.value).toFixed(2);
			}
		} else {
			if (event.target.value < 0 || event.target.value > 1) {
				this.setState({ open: true, message: 'Incorect value of X' });
			} else {
				temp[row][column] = parseInt(event.target.value);
				this.setState({ data: { data: temp } });
			}
		}

		this.fetchData();
	};

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.setState({ open: false, message: '' });
	};

	render() {
		const { data } = this.state;
		const { classes } = this.props;
		return (
			<Paper className={classes.root} square elevation={0}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell colSpan={5} className={classes.font} align="center" padding="dense">
								Inputs
							</TableCell>
							<TableCell className={classes.font} align="center" padding="dense">
								Output
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className={classes.font} align="center" padding="dense">
								X1
							</TableCell>
							<TableCell className={classes.font} align="center" padding="dense">
								X2
							</TableCell>
							<TableCell className={classes.font} align="center" padding="dense">
								W0
							</TableCell>
							<TableCell className={classes.font} align="center" padding="dense">
								W1
							</TableCell>
							<TableCell className={classes.font} align="center" padding="dense">
								W2
							</TableCell>
							<TableCell className={classes.font} align="center" padding="dense">
								t
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.data.map((row, i) => (
							<TableRow key={i}>
								<TableCell id="X1" className={classes.fontEditable} align="center" padding="none">
									<InputBase
										id="x1"
										variant="filled"
										onChange={this.handleChange(i)}
										inputProps={{
											type: 'number',
											min: '0',
											max: '1',
											style: { color: 'white', fontSize: '1.5rem', fontWeight: 500 }
										}}
										className={classes.InputOfX}
										value={row.x1}
									/>
								</TableCell>
								<TableCell id="X2" className={classes.fontEditable} align="center" padding="none">
									<InputBase
										id="x2"
										onChange={this.handleChange(i)}
										inputProps={{ type: 'number', min: '0', max: '1' }}
										className={classes.InputOfX}
										value={row.x2}
									/>
								</TableCell>
								{i === 0 ? (
									<TableCell
										id="W0"
										className={classes.fontEditable}
										rowSpan={4}
										align="center"
										padding="none"
									>
										<InputBase
											id="w0"
											onChange={this.handleChange()}
											inputProps={{ type: 'number', min: '-15', max: '15', step: '0.05' }}
											className={classes.Input}
											value={row.w0}
										/>
									</TableCell>
								) : null}
								{i === 0 ? (
									<TableCell
										id="W1"
										className={classes.fontEditable}
										rowSpan={4}
										align="center"
										padding="none"
									>
										<InputBase
											id="w1"
											onChange={this.handleChange()}
											inputProps={{ type: 'number', min: '-15', max: '15', step: '0.05' }}
											className={classes.Input}
											value={row.w1}
										/>
									</TableCell>
								) : null}
								{i === 0 ? (
									<TableCell
										id="W2"
										className={classes.fontEditable}
										rowSpan={4}
										align="center"
										padding="none"
									>
										<InputBase
											id="w2"
											onChange={this.handleChange()}
											inputProps={{ type: 'number', min: '-15', max: '15', step: '0.05' }}
											className={classes.Input}
											value={row.w2}
										/>
									</TableCell>
								) : null}
								<TableCell id="t" className={classes.font} align="center" padding="dense">
									{row.t}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={this.state.open}
					autoHideDuration={6000}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					message={<span id="message-id">{this.state.message}</span>}
					action={[
						<IconButton
							key="close"
							aria-label="Close"
							color="inherit"
							className={classes.close}
							onClick={this.handleClose}
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</Paper>
		);
	}
}
export default withStyles(styles)(Table1);

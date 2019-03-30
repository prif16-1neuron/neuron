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

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		backgroundColor: 'transparent'
	},
	table: {
		minWidth: 500,
		borderTop: '1px solid white',
		borderLeft: '1px solid white',
		borderRight: '1px solid white'
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
			isLoading: false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	fetchData(url = `https://powerful-beyond-88239.herokuapp.com/v1/calculate`) {
		this.setState({
			isLoading: true
		});
		fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.data)
		})
			.then(response => response.json())
			.then(receivedData => {
				let temp = [...this.state.data.data];
				for (let i = 0; i < temp.length; i++) {
					temp[i].t = parseInt(receivedData[i]['t']);
				}
				this.setState({
					data: { data: temp },
					isLoading: false
				});
			})
			.catch(error => this.setState({ error, isLoading: false }));
	}

	componentWillMount() {
		console.log(this.state.data);
	}

	componentDidMount() {
		this.fetchData();
	}

	handleChange = row => event => {
		let temp = [...this.state.data.data];
		let column = event.target.id;
		if (column === 'w0' || column === 'w1' || column === 'w2') {
			for (let i = 0; i < temp.length; i++) temp[i][column] = parseFloat(event.target.value).toFixed(2);
		} else temp[row][column] = parseInt(event.target.value);
		this.setState({ data: { data: temp } });

		this.fetchData();
	};

	render() {
		const { data } = this.state;
		const { classes } = this.props;
		console.log(this.state);
		return (
			<Paper className={classes.root} square elevation={0}>
				<Table className={classes.table}>
					<TableHead className={classes.table}>
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
										onChange={this.handleChange(i)}
										inputProps={{ type: 'number', min: '0', max: '1' }}
										className={classes.InputOfX}
										defaultValue={row.x1}
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
											inputProps={{ type: 'number', min: '-1', max: '1', step: '0.05' }}
											className={classes.Input}
											defaultValue={row.w0}
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
											inputProps={{ type: 'number', min: '-1', max: '1', step: '0.05' }}
											className={classes.Input}
											defaultValue={row.w1}
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
											inputProps={{ type: 'number', min: '-1', max: '1', step: '0.05' }}
											className={classes.Input}
											defaultValue={row.w2}
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
			</Paper>
		);
	}
}
export default withStyles(styles)(Table1);

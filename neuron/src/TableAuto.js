import React, { Component } from 'react';
import 'react-table/react-table.css';
import { data } from './Utils.1.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import TextFieldMui from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		paddingBottom: 50,
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
	},
	output: {
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		fontSize: '1.5rem',
		fontWeight: 500,
		borderLeft: '1px solid white',
		align: 'center',
		width: 50,
		backgroundColor: 'rgba(45, 25, 107, 0.6)'
	},
	button: {
		boxShadow: 'none',
		textTransform: 'none',
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		fontSize: '.75rem',
		fontWeight: 500,
		margin: theme.spacing.unit,
		marginBottom: 0,
		backgroundColor: 'rgba(45, 25, 107, 0.6)',
		'&:hover': {
			backgroundColor: 'rgba(45, 25, 107, 0.9)'
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: 'rgba(45, 25, 107, 0.8)'
		}
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: 0
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 150
	},
	selected: {
		'&$selected': {
			color: 'white'
		}
	},
	label: {
		'&$focusedLabel': {
			color: 'white'
		},
		'&$erroredLabel': {
			color: 'white'
		}
	},
	focusedLabel: {},
	erroredLabel: {},
	underline: {
		'&$error:after': {
			borderBottomColor: 'white'
		},
		'&:after': {
			borderBottom: `1px solid white`
		}
	},
	error: {}
});
const TextField1 = withStyles(styles)(function TextField({ classes, ...props }) {
	return (
		<TextFieldMui
			InputLabelProps={{
				classes: {
					root: classes.label,
					focused: classes.focusedLabel,
					error: classes.erroredLabel
				}
			}}
			InputProps={{
				classes: {
					root: classes.underline,
					error: classes.error
				}
			}}
			{...props}
		/>
	);
});

const layers = [
	{
		value: 'Linear'
	},
	{
		value: 'Sigmoid'
	},
	{
		value: 'Hyperbolic tangent'
	}
];

class Table1 extends Component {
	constructor() {
		super();
		this.state = {
			data: data,
			isLoading: false,
			layer: 'Linear',
			iterations: 100,
			rate: 0.1,
			xColumns: 2
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleXChange = this.handleXChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	async fetchData() {
		const combined = {
			data: this.state.data.data,
			layer: this.state.layer,
			iterations: this.state.iterations,
			rate: this.state.rate
		};
		try {
			const response = await fetch(`https://powerful-beyond-88239.herokuapp.com/v1/calculate/auto`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(combined)
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

	handleChange = row => event => {
		let temp = [...this.state.data.data];
		let column = event.target.id;
		if (row === 'layer' || row === 'iterations' || row === 'rate') {
			this.setState({ [row]: event.target.value });
		} else {
			temp[row][column] = parseInt(event.target.value);
			this.setState({ data: { data: temp } });
		}
	};
	handleXChange(event) {
		this.setState({ [event.target.id]: parseInt(event.target.value) });
	}

	handleClick() {
		this.fetchData();
	}

	render() {
		var { data } = this.state.data;

		const { classes } = this.props;
		const xCols = Array.apply(null, new Array(this.state.xColumns)).map((_, i) => i);

		return (
			<div>
				<form className={classes.container} noValidate autoComplete="off">
					<TextField1
						inputProps={{ type: 'number', min: '2', max: '3', style: { color: '#FFFFFF', width: 150 } }}
						value={this.state.xColumns}
						onChange={this.handleXChange}
						error
						label="Xn columns"
						id="xColumns"
					/>
					<TextField1
						id="layer"
						select
						inputProps={{
							style: { width: 150 }
						}}
						error
						label="Output layer"
						className={classes.textField}
						value={this.state.layer}
						onChange={this.handleChange('layer')}
						SelectProps={{
							MenuProps: {
								className: classes.menu,
								PaperProps: { style: { backgroundColor: '#4527a0' } }
							}
						}}
					>
						{layers.map(option => (
							<MenuItem classes={{ selected: classes.selected }} key={option.value} value={option.value}>
								<div style={{ color: 'white' }}>{option.value}</div>
							</MenuItem>
						))}
					</TextField1>
					<TextField1
						inputProps={{
							type: 'number',
							min: '100',
							step: '100',
							style: { color: '#FFFFFF', width: 150 }
						}}
						value={this.state.iterations}
						onChange={this.handleChange('iterations')}
						error
						label="Iterations per click"
						id="iterations"
					/>
					<TextField1
						inputProps={{
							type: 'number',
							min: '0',
							max: '1',
							step: '0.1',
							style: { color: '#FFFFFF', width: 150 }
						}}
						style={{ marginLeft: 10 }}
						value={this.state.rate}
						onChange={this.handleChange('rate')}
						error
						label="Learning rate"
						id="learningRate"
					/>
					<Button variant="contained" className={classes.button} onClick={this.handleClick}>
						Train
					</Button>
				</form>
				<Paper className={classes.root} square elevation={0}>
					<Table className={classes.table}>
						<TableHead className={classes.table}>
							<TableRow>
								<TableCell
									colSpan={this.state.xColumns === 2 ? 5 : 7}
									className={classes.font}
									align="center"
									padding="dense"
								>
									Inputs
								</TableCell>
								<TableCell colSpan={2} className={classes.font} align="center" padding="dense">
									Output
								</TableCell>
							</TableRow>
							<TableRow>
								{xCols.map(index => (
									<TableCell
										key={'headX' + index}
										className={classes.font}
										align="center"
										padding="dense"
									>
										X{index + 1}
									</TableCell>
								))}
								<TableCell className={classes.font} align="center" padding="dense">
									W0
								</TableCell>
								{xCols.map(index => (
									<TableCell
										key={'headW' + index}
										className={classes.font}
										align="center"
										padding="dense"
									>
										W{index + 1}
									</TableCell>
								))}
								<TableCell className={classes.font} align="center" padding="dense">
									y
								</TableCell>
								<TableCell className={classes.font} align="center" padding="dense">
									t
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map(
								(row, i) =>
									this.state.xColumns === 2 ? (
										i % 2 === 0 ? (
											<TableRow key={i}>
												<TableCell
													id="X1"
													className={classes.fontEditable}
													align="center"
													padding="none"
												>
													<InputBase
														id="x1"
														onChange={this.handleChange(i)}
														inputProps={{ type: 'number', min: '0', max: '1' }}
														className={classes.InputOfX}
														defaultValue={row.x1}
													/>
												</TableCell>
												<TableCell
													id="X2"
													className={classes.fontEditable}
													align="center"
													padding="none"
												>
													<InputBase
														id="x2"
														onChange={this.handleChange(i)}
														inputProps={{ type: 'number', min: '0', max: '1' }}
														className={classes.InputOfX}
														defaultValue={row.x2}
													/>
												</TableCell>
												{this.state.xColumns === 3 ? (
													<TableCell
														id="X3"
														className={classes.fontEditable}
														align="center"
														padding="none"
													>
														<InputBase
															id="x3"
															onChange={this.handleChange(i)}
															inputProps={{ type: 'number', min: '0', max: '1' }}
															className={classes.InputOfX}
															defaultValue={row.x3}
														/>
													</TableCell>
												) : null}
												{i === 0 ? (
													<TableCell
														id="W0"
														className={classes.font}
														rowSpan={2 ** this.state.xColumns}
														align="center"
														padding="none"
													>
														{row.w0}
													</TableCell>
												) : null}
												{i === 0 ? (
													<TableCell
														id="W1"
														className={classes.font}
														rowSpan={2 ** this.state.xColumns}
														align="center"
														padding="none"
													>
														{row.w1}
													</TableCell>
												) : null}
												{i === 0 ? (
													<TableCell
														id="W2"
														className={classes.font}
														rowSpan={2 ** this.state.xColumns}
														align="center"
														padding="none"
													>
														{row.w2}
													</TableCell>
												) : null}
												<TableCell
													id="y"
													className={classes.output}
													align="center"
													padding="dense"
												>
													{row.y}
												</TableCell>
												<TableCell
													id="t"
													className={classes.output}
													align="center"
													padding="dense"
												>
													{row.t}
												</TableCell>
											</TableRow>
										) : null
									) : (
										<TableRow key={i}>
											<TableCell
												id="X1"
												className={classes.fontEditable}
												align="center"
												padding="none"
											>
												<InputBase
													id="x1"
													onChange={this.handleChange(i)}
													inputProps={{ type: 'number', min: '0', max: '1' }}
													className={classes.InputOfX}
													defaultValue={row.x1}
												/>
											</TableCell>
											<TableCell
												id="X2"
												className={classes.fontEditable}
												align="center"
												padding="none"
											>
												<InputBase
													id="x2"
													onChange={this.handleChange(i)}
													inputProps={{ type: 'number', min: '0', max: '1' }}
													className={classes.InputOfX}
													defaultValue={row.x2}
												/>
											</TableCell>
											{this.state.xColumns === 3 ? (
												<TableCell
													id="X3"
													className={classes.fontEditable}
													align="center"
													padding="none"
												>
													<InputBase
														id="x3"
														onChange={this.handleChange(i)}
														inputProps={{ type: 'number', min: '0', max: '1' }}
														className={classes.InputOfX}
														defaultValue={row.x3}
													/>
												</TableCell>
											) : null}
											{i === 0 ? (
												<TableCell
													id="W0"
													className={classes.font}
													rowSpan={2 ** this.state.xColumns}
													align="center"
													padding="none"
												>
													{row.w0}
												</TableCell>
											) : null}
											{i === 0 ? (
												<TableCell
													id="W1"
													className={classes.font}
													rowSpan={2 ** this.state.xColumns}
													align="center"
													padding="none"
												>
													{row.w1}
												</TableCell>
											) : null}
											{i === 0 ? (
												<TableCell
													id="W2"
													className={classes.font}
													rowSpan={2 ** this.state.xColumns}
													align="center"
													padding="none"
												>
													{row.w2}
												</TableCell>
											) : null}
											{i === 0 ? (
												<TableCell
													id="W3"
													className={classes.font}
													rowSpan={2 ** this.state.xColumns}
													align="center"
													padding="none"
												>
													{row.w3}
												</TableCell>
											) : null}
											<TableCell id="y" className={classes.output} align="center" padding="dense">
												{row.y}
											</TableCell>
											<TableCell id="t" className={classes.output} align="center" padding="dense">
												{row.t}
											</TableCell>
										</TableRow>
									)
							)}
						</TableBody>
					</Table>
				</Paper>
			</div>
		);
	}
}
export default withStyles(styles)(Table1);

import React, { useState } from 'react';
import {useDispatch } from 'react-redux';

import { login } from '../../Modules/Login/action'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
	TextField: {
		width:'100%',
		margin: '1rem 0',
	},
}));

function LoginPage(props) {
    const [username, setUsername] = useState('')
    // const [pass, setPass] = useState('')
    const dispatch = useDispatch()
	const classes = useStyles();

	const [values, setValues] = React.useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	  });
	
	
	const onSubmit = (evt) => {
		evt.preventDefault();

		if(username.trim().length === 0 || values.password.trim().length === 0){
            alert('뭔가 내용이 비어있어용');
        }
        else if(username.trim().length >= 30 || values.password.trim().length >= 200){
			alert('뭔가 내용이 너무 길어요');
        }
		else {
			dispatch(login(username, values.password))
			setUsername("");
			setValues({...values, password: ""})
			//비밀번호가 안남게 해야됨
		}
	};

	  const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	  };
	
	  const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	  };
	
	  const handleMouseDownPassword = event => {
		event.preventDefault();
	  };

	return (
		<Paper className='listbox'>
		<form onSubmit={onSubmit} className={classes.root}>
			<h1>Login</h1>
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item xs={12}>
					<FormControl container direction="column" justify="center" alignItems="center">
						<TextField id="outlined-name" label="아이디" rows="1" defaultValue="Default Value" variant="outlined"  className={classes.TextField}
							name="title"
							value={username}
							onChange={e=>setUsername(e.target.value)}
						/>
					</FormControl>	
				</Grid>	
				<Grid item xs={12}>
					<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							label="Password"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							endAdornment={
							<InputAdornment position="end">
								<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
								>
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
							}
							labelWidth={70}
						/>
					</FormControl>	
				</Grid>		

				<Grid item xs={12}>
					<Grid container direction="row" justify="flex-end" alignItems="center">
						<Button variant="contained" color="primary" type="submit">
							로그인
						</Button>	
					</Grid>
				</Grid>	

			</Grid>	
		</form>
		<Link to="/">main</Link>
		</Paper>
	)
}

export default LoginPage;
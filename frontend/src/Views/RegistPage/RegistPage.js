import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import {registUser} from '../../Modules/Auth/Regist/action';

import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import clsx from 'clsx';

import { Link } from 'react-router-dom';

// import IconButton from '@material-ui/core/IconButton';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(() => ({
	TextField: {
		width:'100%',
		margin: '1rem 0',
	},
}));

function RegistPage() {
	const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

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
			dispatch(registUser(username, email, values.password))
            setUsername("");
            setEmail("");
			setValues({...values, password: ""})
			//비밀번호가 안남게 해야됨
		}
	};

	  const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	  };
	
	//   const handleClickShowPassword = () => {
	// 	setValues({ ...values, showPassword: !values.showPassword });
	//   };
	
	//   const handleMouseDownPassword = event => {
	// 	event.preventDefault();
	//   };

	return (
		<Paper className='listbox'>
		<form onSubmit={onSubmit} className={classes.root}>
            username
            <input name="username" value={username} onChange={e=>setUsername(e.target.value)}></input>
            email
            <input name="email" value={email} onChange={e=>setEmail(e.target.value)}></input>
            password
            <input name="password" value={values.password} onChange={handleChange('password')}></input>
            <Button variant="contained" color="primary" type="submit">
                등록
            </Button>
		</form>
		<Link to="/">main</Link>
		</Paper>
	)
}

export default RegistPage;
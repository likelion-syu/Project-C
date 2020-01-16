import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { login } from '../Modules/login/action'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
	TextField: {
		width:'100%',
		margin: '1rem 0',
	},
}));




function Login() {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()
    const onLogin = (evt) => {
        evt.preventDefault();
        dispatch(login(username,pass))
        setUsername("");
        setPass("");
    };

    const classes = useStyles();
    
    return(
        <div>
            <p>로그인</p>
            <form onSubmit = {onLogin}>
            <TextField id="outlined-name" label="아이디" rows="1" defaultValue="Default Value" variant="outlined"  className={classes.TextField}
                name="username"
                value={username}
                onChange={e=>setUsername(e.target.value)}
            />
            <TextField id="outlined-name" label="비밀번호" rows="1" defaultValue="Default Value" variant="outlined"  className={classes.TextField}
                name="pass"
                value={pass}
                onChange={e=>setPass(e.target.value)}
            />
            <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;
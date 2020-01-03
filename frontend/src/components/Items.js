import React from 'react';
// import axios from "axios"

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import moment from 'moment'

const useStyles = makeStyles(theme => ({
	divider: {
        height: '6rem',
        verticalAlign:'middle',
        display:'inline-block',
	},
	time: {
		fontSize: '0.9rem',
		color: 'gray',
	}
}));

function List(props) {
	const classes = useStyles();
    
    const handleRemove = () => {
		if(window.confirm('삭제할까요?')){
            props.onRemove(props.todo.id);
        }
    };

	return (
		<Paper className='listbox'>
			<li key={props.todo.id}>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={10}>
						<h2>{props.todo.title}</h2>
						<img src={props.todo.image} alt={props.todo.title}/>
						<p>{props.todo.content}</p>
						<p className={classes.time}>{moment(props.todo.time).startOf('day').fromNow() }</p>				
					</Grid>
					<Grid item xs={1}>
						<Grid container direction="row" justify="center" alignItems="center">
							<Divider className={ classes.divider } orientation="vertical"/>
						</Grid>	
					</Grid>
					
					<Grid item xs={1}>
						<Grid container direction="row" justify="center" alignItems="center">		
							<IconButton color="secondary" className={classes.iconButton} aria-label="directions" onClick={ handleRemove }>
								<DeleteOutlinedIcon/>
							</IconButton>
						</Grid>			
					</Grid>	
				</Grid>
			</li>
		</Paper>
	)
}
export default List;
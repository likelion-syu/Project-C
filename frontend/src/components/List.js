import React from 'react';
import axios from "axios"

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
	const remove = async () => {
        // handleEvent
        if(window.confirm('삭제할까요?')){
            await axios({
                url : "http://localhost:8000/api/posts/" + props.id,
                method : 'delete'
            });
            props.handleEvent();
        }
	}
	
	const classes = useStyles();

	return (
		<Paper className='listbox'>
			<li key={props.id}>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={10}>
						<h2>{props.title}</h2>
						<img src={props.image} alt={props.title}/>
						<p>{props.content}</p>
						<p className={classes.time}>{moment(props.time).startOf('day').fromNow() }</p>				
					</Grid>
					<Grid item xs={1}>
						<Grid container direction="row" justify="center" alignItems="center">
							<Divider className={ classes.divider } orientation="vertical"/>
						</Grid>	
					</Grid>
					
					<Grid item xs={1}>
						<Grid container direction="row" justify="center" alignItems="center">		
							<IconButton color="secondary" className={classes.iconButton} aria-label="directions" onClick={remove}>
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
import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import moment from 'moment'
import ModalForm from './ModalForm'

const useStyles = makeStyles({
	divider: {
        height: '6rem',
        verticalAlign:'middle',
        display:'inline-block',
	},
	time: {
		fontSize: '0.9rem',
		color: 'gray',
	}
});
  
function Item(props) {
	const classes = useStyles();
    
    const handleRemove = () => {
		if(window.confirm('삭제할까요?')){
            props.onRemove(props.data.id);
        }
	};
	
	return (
		<Link to={`post/${props.data.id}`}>
			<Paper className='listbox'>
				<li key={props.data.id}>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={10}>
							<h2>{props.data.title}</h2>
							<img src={props.data.image} alt={props.data.title}/>
							<p>{props.data.content}</p>
							<p className={classes.time}>{moment(props.data.time).startOf('day').fromNow() }</p>
						</Grid>
						<Grid item xs={1}>
							<Grid container direction="row" justify="center" alignItems="center">
								<Divider className={ classes.divider } orientation="vertical"/>
							</Grid>	
						</Grid>
						
						<Grid item xs={1}>
							<Grid container direction="row" justify="center" alignItems="center">
								<ModalForm onPutData={props.onPutData} data={props.data}>수 정</ModalForm>
								<IconButton color="secondary" className={classes.iconButton} aria-label="directions" onClick={ handleRemove }>
									<DeleteOutlinedIcon/>
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</li>
			</Paper>
		</Link>
	)
}

export default Item;
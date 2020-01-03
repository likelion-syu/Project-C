import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Items'

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
    
    console.log(props.todos)
	return (
		<Paper className='listbox'>
			<ul>
                {
                    props.todos.map(
							(todo, idx) => (
							<Item
								key={idx}
								todo = {todo}
								onRemove = {props.onRemove}
							/>
							)
                        )
                    }
            </ul>
		</Paper>
	)
}
export default List;
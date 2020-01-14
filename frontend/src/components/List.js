import React from 'react';

import Paper from '@material-ui/core/Paper';
import Item from './Items';
import './assets/ListStyle.scss'


function List(props) {
	return (
		<Paper className='listbox'>
			<ul>
                {
                    props.todos.results.map(
							(todo) => (
							<Item
								key={todo.id}
								todo = {todo}
								onRemove = {props.onRemove}
								onPutData = {props.onPutData}
							/>
							)
                        )
                    }
            </ul>
		</Paper>
	)
}
export default List;
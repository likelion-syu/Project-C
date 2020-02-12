import React from 'react';
import CommentItem from './CommentItems'
import Item from './Items';
import '../Assets/scss/ListStyle.scss'

function List(props) {
	return (
		<ul>
			{
				props.datas.map(
						(data) => (
						<CommentItem
							key={data.id}
							data = {data}
							onRemove = {props.onRemove}
							onPutData = {props.onPutData}
						/>
						)
					)
				}
		</ul>
	)
}
export default List;

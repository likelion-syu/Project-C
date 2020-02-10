import React from 'react';

import Item from './Items';
import '../Assets/scss/ListStyle.scss'
console.log(List)

function List(props) {
	return (
		<ul>
			{
				props.datas.results.map(
						(data) => (
						<Item
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
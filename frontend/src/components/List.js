import React from 'react';

import Item from './Items';
import './assets/ListStyle.scss'


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
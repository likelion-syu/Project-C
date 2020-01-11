import React, { useEffect } from 'react';
// import { postTodos, getTodos, delTodos, putTodos } from '../Modules/todos/action'
import { getDetailTodo } from '../Api/djangoapi';

function Detail({match}) {
	const PostId = match.params.id

	useEffect (()=>{
		getDetailTodo(PostId).then((res) => {
			const detail = res;
			console.log(detail.title);
		});
	},)

	
	
	return (
		<div>
			<h1>aa{detail}</h1>
		</div>
	)
}
export default Detail;
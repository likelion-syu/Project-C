import React, { useEffect } from 'react';
import { getDetailTodo } from '../Api/djangoapi';

function Detail({match}) {
	const PostId = match.params.id
	
	useEffect (()=>{
		getDetailTodo(PostId).then((res) => {
			const detail = res;
			// return detail;
			console.log(detail.title);
		});
	});
	
	return (
		<div>
			<h1>aa</h1>
		</div>
	)
}
export default Detail;
import React, { useEffect } from 'react';
<<<<<<< HEAD
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
	
=======
import {useSelector, useDispatch} from 'react-redux'
import { detailTodos } from '../Modules/todos/action'


function Detail({match}) {
	const postId = match.params.id
	const dispatch = useDispatch()
	const { loading, error, data } = useSelector(state => state.todos.detailData)
	useEffect (()=>{
		dispatch(detailTodos(postId))
	},[dispatch, postId])
	console.log(data)

>>>>>>> 699d5bcd88e0c6219d08dbadb7ee05621608f286
	return (
		<div>
			{loading && <div>loading</div>}
			{error && <div>에러가 발생했습니다.</div>}
			{data && <div>{data.id}, {data.title}, {data.content}, {data.image}</div>}
		</div>
	);
}
export default Detail;
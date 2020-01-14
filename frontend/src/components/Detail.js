import React, { useEffect } from 'react';
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

	return (
		<div>
			{loading && <div>loading</div>}
			{error && <div>에러가 발생했습니다.</div>}
			{data && <div>{data.id}, {data.title}, {data.content}, {data.image}</div>}
		</div>
	);
}
export default Detail;
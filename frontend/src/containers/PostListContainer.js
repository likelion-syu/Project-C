import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from "../components/Form"
import List from "../components/List.js"

import '../assets/style.scss'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import { postTodos, getTodos, delTodos } from '../modules/todos/action'

function PostListContainer() {
	const { loading, error, data } = useSelector(state => state.todos.todoData)
	const dispatch = useDispatch()

	// useEffect 는 ComponentDidMount와 비슷한 기능, Render를 담당한다.
	useEffect (()=>{
		dispatch(getTodos())
	},[dispatch])
	
	// submit 이후 list 업데이트
	const onPostData = async (data1, data2, data3) => {
		let form_data = new FormData();
		form_data.append('title', data1);
		form_data.append('content', data2);
		form_data.append('image', data3.image, data3.image.name);
		let post = postTodos(form_data)
		await post(dispatch)
		dispatch(getTodos())
	}

	// delete 이후 list 업데이트
	const onRemove = async (id) => {
		let del = delTodos(id)
		await del(dispatch)
		dispatch(getTodos())
	}
	
	return (
		<>
			<div>
				<div className="App">
					<Container maxWidth="lg">
						<h1>React With Django 방명록😎</h1>
						<Paper className='listbox'>
							<Form onPostData={ onPostData }/>		
						</Paper>
						<Divider variant="middle" />
						<h1>Posts</h1>
						<div className="ViewSection">
							{loading && <List todos={loading} onRemove ={onRemove} />}
							{error && <div>에러가 발생했습니다.</div>}
							{data && <List todos={data} onRemove = {onRemove} />}
						</div>
						<Divider variant="middle" />
						<h1>Cats</h1>
					</Container>
				</div>
			</div>
		</>
	);
}

export default PostListContainer;
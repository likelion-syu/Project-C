import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PostForm from "../../Components/PostForm"
import List from "../../Components/List.js"

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import { postPosts, getPosts, delPosts, putPosts } from '../../Modules/Posts/action'
import { postCats, getCats, delCats, putCats } from '../../Modules/Cats/action'

function MainPage() {
	const { loading, error, data } = useSelector(state => state.posts.PostsData)
	const { loading_c, error_c, data_c } = useSelector(state => state.cats.CatsData)
	const dispatch = useDispatch()

	// useEffect
	useEffect (()=>{
		dispatch(getPosts(), getCats())
	},[dispatch])
	console.log(loading, error, data)
	console.log(loading_c, error_c, data_c)
	
	// submit + list 업데이트
	const onPostData = async (data1, data2, data3) => {
		let form_data = new FormData();
		form_data.append('title', data1);
		form_data.append('content', data2);
		form_data.append('image', data3.image, data3.image.name);
		let post = postPosts(form_data)
		await post(dispatch)
		dispatch(getPosts())
	}
	
	// Edit + list 업데이트
	const onPutData = async (id, data1, data2, data3) => {
		let form_data = new FormData();
		form_data.append('title', data1);
		form_data.append('content', data2);
		form_data.append('image', data3.image, data3.image.name);
		let put = putPosts(id, form_data)
		await put(dispatch)
		dispatch(getPosts())
	}

	// delete + list 업데이트
	const onRemove = async (id) => {
		let del = delPosts(id)
		await del(dispatch)
		dispatch(getPosts())
	}
	
	return (
		<>
			<div>
				<div className="App">
					<Container maxWidth="lg">
						<h1>Cat</h1>

						<Link to='/login'>Login</Link>

						<Paper className='listbox'>
							<PostForm onPostData={ onPostData }/>
						</Paper>

						<Divider variant="middle" />

						<h2>Posts</h2>
						<div className="ViewSection">
							{loading && <List datas={loading} onRemove ={onRemove} />}
							{error && <div>에러가 발생했습니다.</div>}
							{data && <List datas={data} onRemove = {onRemove} onPutData = {onPutData} />}
						</div>

						<Divider variant="middle" />

						<h2>Cats</h2>
						<div className="ViewSection">
							{loading_c && <List datas={loading_c} onRemove ={onRemove} />}
							{error_c && <div>에러가 발생했습니다.</div>}
							{data_c && <List datas={data_c} onRemove = {onRemove} onPutData = {onPutData} />}
						</div>
					</Container>
				</div>
			</div>
		</>
	);
}

export default MainPage;
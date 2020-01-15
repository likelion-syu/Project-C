import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { detailPosts } from '../Modules/posts/action'
import { Link } from 'react-router-dom';
import moment from 'moment'


function Detail({match}) {
	const postId = match.params.id
	console.log(postId);
	const dispatch = useDispatch()
	const { loading, error, data } = useSelector(state => state.posts.detailData)
	useEffect (()=>{
		dispatch(detailPosts(postId))
	},[dispatch, postId])

	return (
		<div>
			{loading && <div>loading</div>}
			{error && <div>에러가 발생했습니다.</div>}
			{data && 
				<div>
					<h1>{data.title}</h1>
					<p> {data.author ? data.author : "Unknown" } | { moment(data.created_at).startOf('day').fromNow() }</p>
					<p>{data.content}</p>
					<img src={data.image} alt={data.title}/>
					<Link to='/'>main</Link>
				</div>
			}
		</div>
	);
}
export default Detail;
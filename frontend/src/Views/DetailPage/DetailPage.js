import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { detailPosts } from '../../Modules/Posts/action'
import { getComment } from '../../Modules/Comment/action'
import { Link } from 'react-router-dom';
import moment from 'moment'
import CommentList from '../../Components/CommentList'


function DetailPage({match}) {
	const { CommentsData } = useSelector(state => state.comments)
	const cd = CommentsData;
	const { loading, error, data } = useSelector(state => state.posts.detailData)

	console.log(CommentsData)

	const dispatch = useDispatch();

	const postId = match.params.id

	useEffect (()=>{
		dispatch(detailPosts(postId))
		dispatch(getComment(postId))
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
			<div>
				{cd.loading && <CommentList datas={cd.loading}/>}
				{cd.error && <div>에러가 발생했습니다.</div>}
				{cd.data && <CommentList datas= {cd.data}/>}
			</div>
		</div>
	); 
}
export default DetailPage; 
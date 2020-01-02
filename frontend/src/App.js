import React , { useState, useEffect } from 'react';
import axios from "axios"
import Form from "./components/Form.js"
import List from "./components/List.js"

import './assets/style.scss'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

function App(props) {
	// List 표출을 위한 state
	const [items, setItems] = useState([]);

	// Read(리스트업 response.data를 setItems에 넣어줍니다.)
	// useEffect 는 ComponentDidMount와 비슷한 기능, Render를 담당한다.
	useEffect (async () => {
		// 컴포넌트가 render 되었을 때 실행되는 부분
		let response = await get();
		setItems([...response.data]);
	}, []);

	//Get data (api에서 data를 호출합니다.) await를 통해 data를 적절한 타이밍에 받을 수 있음
	const get = async () => {
		return await axios({
			url : 'http://localhost:8000/api/posts/',
			method: 'get'
		})
	}
	
	// submit 이후 list 업데이트
	const submit = async () => {
		let res = await get();
		setItems([...res.data]);
	}

	// remove 이후 list 업데이트
	const remove = async () => {
		let res = await get();
		setItems([...res.data]);
	}

	return (
		<div className="App">
			<Container maxWidth="lg">
				<h1>React With Django 방명록😎</h1>
				<Paper className='listbox'>
					<Form HandleSubmit={ submit }/>		
				</Paper>
				<Divider variant="middle" />
				<h1>Posts</h1>
				<div className="ViewSection">
					<ul>
						{
							items.map(
								(item, idx) => {	
								return <List 
									key={idx}
									id={item.id}
									title={item.title}
									image={item.image}
									content={item.content}
									time={item.created_at}
									handleEvent={ remove }
								/>
								}
							)
						}
						
					</ul>
				</div>
				<Divider variant="middle" />
				<h1>Cats</h1>
			</Container>
		</div>
	);
}

export default App;
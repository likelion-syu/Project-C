import React from 'react';
import PostListContainer from './containers/PostListContainer';
import './assets/IndexStyle.scss';
import Login from './components/Login';
import {Route} from 'react-router-dom';


function App() {
	return (
		<div className="App">
			{/* <PostListContainer/> */}
			<Route path="/" exact={ true } component= {PostListContainer}/>
			<Route path="/login" exact={true} component= {Login} />
		</div>
	);
}

export default App;
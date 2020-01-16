import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Components/assets/IndexStyle.scss'

import Home from './Containers/Home'
import Detail from './Components/Detail'
import Login from './Components/Login'


function App(match) {
	return (
		
		<div className="App">
			<Router>
				<Route exact path="/" component={Home}/>
				<Route path="/post/:id" component={Detail}/>
				<Route path="/auth/login" component={Login}/>
			</Router>	
		</div>
	);
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Components/assets/IndexStyle.scss'

import Home from './Containers/Home'
import Item from './Components/Items'
import Detail from './Components/Detail'


function App(match) {
	return (
		
		<div className="App">
			<Router>
				<Route exact path="/" component={Home}/>
				<Route path="/post/:id" component={Detail}/>
			</Router>	
		</div>
	);
}

export default App;
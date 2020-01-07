import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Components/assets/IndexStyle.scss'

import PostListContainer from './Containers/PostListContainer'
import Detail from './Components/Detail'



function App() {
	return (
		
		<div className="App">
			<Router>
				<Route exact path="/" component={PostListContainer}/>
				<Route path="/detail" component={Detail}/>
			</Router>	
		</div>
	);
}

export default App;
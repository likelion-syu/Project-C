import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk  from 'redux-thunk';
import rootReducer from './Modules';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './Views/MainPage/MainPage'
import DetailPage from './Views/DetailPage/DetailPage'
import LoginPage from './Views/LoginPage/LoginPage'

import './Assets/scss/IndexStyle.scss'



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
			<Router>
				<Route exact path="/" component={MainPage}/>
				<Route path="/post/:id" component={DetailPage}/>
				<Route path="/login" component={LoginPage}/>
			</Router>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

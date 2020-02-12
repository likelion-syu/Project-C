import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk  from 'redux-thunk';
import rootReducer from './Modules';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';

import setAuthorizationToken from "./Authorization/authorization";
import {LOGIN_SUCCESS, LOGIN_FAIL} from "./Modules/Auth/Login/action";

import MainPage from './Views/MainPage/MainPage'
import DetailPage from './Views/DetailPage/DetailPage'
import LoginPage from './Views/LoginPage/LoginPage'
import RegistPage from './Views/RegistPage/RegistPage'

import './Assets/scss/IndexStyle.scss'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));
if (localStorage.getItem('token')){
    console.log(localStorage.getItem('token'))
    setAuthorizationToken(localStorage.getItem('token')) 
    let userData = localStorage.getItem('userData') == null ? null : JSON.parse(localStorage.getItem('userData'))
    store.dispatch({ type: LOGIN_SUCCESS, payload: userData}) //provided he has a valid token 
} else store.dispatch({type: LOGIN_FAIL,
    token: null,
    user: null,
    isAuthenticated: false,
    isLoading: false
})
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
			<Router>
				<Route exact path="/" component={MainPage}/>
				<Route path="/post/:id" component={DetailPage}/>
				<Route path="/login" component={LoginPage}/>
                <Route path="/regist" component={RegistPage}/>
			</Router>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

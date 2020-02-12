import { combineReducers } from 'redux';
import cats from './Cats';
import posts from './Posts';
import user from './Auth/User';
// import login from './Auth/Login';
import regist from './Auth/Regist';
import comments from './Comment';

const rootReducer = combineReducers ({
	cats,
    posts,
    user,
    // login,
    regist,
    comments,
});

export default rootReducer;
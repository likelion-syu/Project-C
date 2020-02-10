import { combineReducers } from 'redux';
import cats from './Cats';
import posts from './Posts';
import user from './Auth/User';
// import login from './Auth/Login';

const rootReducer = combineReducers ({
	cats,
    posts,
    user,
    // login,
});

export default rootReducer;
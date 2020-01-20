import { combineReducers } from 'redux';
import cats from './Cats';
import posts from './Posts';
import user from './User';
import login from './Login';

const rootReducer = combineReducers ({
	cats,
    posts,
    user,
    login,
});

export default rootReducer;
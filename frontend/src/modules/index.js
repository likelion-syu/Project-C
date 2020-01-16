import { combineReducers } from 'redux';
import posts from './posts';
import user from './user';
import login from './login';

const rootReducer = combineReducers ({
    posts,
    user,
    login,
});

export default rootReducer;
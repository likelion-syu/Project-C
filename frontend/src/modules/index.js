import { combineReducers } from 'redux';
import todos from './todos';
import user from './user';
import login from './login';

const rootReducer = combineReducers ({
    todos,
    user,
    login,
});

export default rootReducer;
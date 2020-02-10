import {
    USER_DATA,
    USER_DATA_SUCCESS,
    USER_DATA_ERROR,
} from './action'

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../Login/action'

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case USER_DATA:
            return {
                ...state,
                isLoading: true
            };
        case USER_DATA_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            localStorage.setItem("token",
            action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case USER_DATA_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('user')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}
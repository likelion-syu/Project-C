import {
    REGIST_USER,
    REGIST_USER_SUCCESS,
    REGIST_USER_FAIL
} from './action'

const initialState = {
    loading: false,
    error: null,
    data: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case REGIST_USER:
            return {
                ...state,
                loading: true,
                error: null,
                data: null
            };
        case REGIST_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case REGIST_USER_FAIL:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        default:
            return state
    }
}
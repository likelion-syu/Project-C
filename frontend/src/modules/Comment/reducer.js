import {
    GET_COMMENT_DATA,
    GET_COMMENT_DATA_SUCCESS,
    GET_COMMENT_DATA_FAIL,
} from './action'

const initialState = {
    CommentsData:{
        loading: false,
        error: null,
        data: null,
    }
}

export default function comments (state = initialState, action){
    switch (action.type) {
        case GET_COMMENT_DATA:
            return {
                ...state,
                CommentsData:{
                    loading: state.CommentsData.data,
                    error: null,
                    data: null,
                }
            }
        case GET_COMMENT_DATA_SUCCESS:
            return {
                ...state,
                CommentsData:{
                    loading: false,
                    error: null,
                    data: action.CommentsData
                }
            }
        case GET_COMMENT_DATA_FAIL:
            return {
                ...state,
                CommentsData:{
                    loading: false,
                    error: action.error
                }
            }
        default:
            return state;
    }
}
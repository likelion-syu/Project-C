import * as TodoAction from "./action"

//초기 스테이트 정해주기
const initialState = {
    todoData: {
        loading: false,
        error: null,
        data: null
    },
    postData: {
        loading: false,
        error: null,
        data: null
    },
    delData: {
        loading: false,
        error: null,
        data: null
    },
    patchData:{
        loading: false,
        error: null,
        data: null
    }
};

//TodoList리듀서
export default function todos (state = initialState, action) {
    switch (action.type) {
        
        case TodoAction.GET_TODO_DATA:
            return {
                ...state,
                todoData: {
                    loading: state.todoData.data,
                    error: null,
                    data: null
                }
            };
        case TodoAction.GET_TODO_DATA_SUCCESS:
            return {
                ...state,
                todoData: {
                    loading: false,
                    error: null,
                    data: action.todoData   
                }
            };
        case TodoAction.GET_TODO_DATA_ERROR:
            return {
                ...state,
                todoData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        case TodoAction.POST_TODO_DATA:
            return {
                ...state,
                postData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case TodoAction.POST_TODO_DATA_SUCCESS:
            return {
                ...state,
                postData: {
                    loading: false,
                    error: null,
                    data: action.postData
                }
            };
        case TodoAction.POST_TODO_DATA_ERROR:
            return {
                ...state,
                postData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        case TodoAction.DEL_TODO_DATA:
            return {
                ...state,
                delData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case TodoAction.DEL_TODO_DATA_SUCCESS:
            return {
                ...state,
                delData: {
                    loading: false,
                    error: null,
                    data: action.delData
                }
            };
        case TodoAction.DEL_TODO_DATA_ERROR:
            return {
                ...state,
                delData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        case TodoAction.PATCH_TODO_DATA:
            return {
                ...state,
                patchData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case TodoAction.PATCH_TODO_DATA_SUCCESS:
            return {
                ...state,
                patchData: {
                    loading: false,
                    error: null,
                    data: action.patchData
                }
            };
        case TodoAction.PATCH_TODO_DATA_ERROR:
            return {
                ...state,
                patchData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
            default:
                return state;
    }
};
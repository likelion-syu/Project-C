import { getTodo, postTodo, delTodo, patchTodo, putTodo, detailTodo } from '../../Api/djangoapi';

//TodoList 가져오기
export const GET_TODO_DATA = 'todos/GET_TODO_DATA';
export const GET_TODO_DATA_SUCCESS = 'todos/GET_TODO_DATA_SUCCESS';
export const GET_TODO_DATA_ERROR = 'todos/GET_TODO_DATA_ERROR';
//TodoList 하나씩 가져오기
export const GET_O_TODO_DATA = 'todos/GET_O_TODO_DATA'
export const GET_O_TODO_DATA_SUCCESS = 'todos/GET_O_TODO_DATA_SUCCESS'
export const GET_O_TODO_DATA_ERROR = 'todos/GET_O_TODO_DATA_ERROR'
//TodoList 추가
export const POST_TODO_DATA = 'todos/POST_TODO_DATA';
export const POST_TODO_DATA_SUCCESS = 'todos/POST_TODO_DATA_SUCCESS';
export const POST_TODO_DATA_ERROR = 'todos/POST_TODO_DATA_ERROR';
//TodoList 삭제
export const DEL_TODO_DATA = 'todos/DEL_TODO_DATA';
export const DEL_TODO_DATA_SUCCESS = 'todos/DEL_TODO_DATA_SUCCESS';
export const DEL_TODO_DATA_ERROR = 'todos/DEL_TODO_DATA_ERROR';
//TodoList 수정
export const PUT_TODO_DATA = 'todos/PUT_TODO_DATA';
export const PUT_TODO_DATA_SUCCESS = 'todos/PUT_TODO_DATA_SUCCESS'; 
export const PUT_TODO_DATA_ERROR = 'todos/PUT_TODO_DATA_ERROR';
//TodoList patch
export const PATCH_TODO_DATA = 'todos/PATCH_TODO_DATA';
export const PATCH_TODO_DATA_SUCCESS = 'todos/PATCH_TODO_DATA_SUCCESS'; 
export const PATCH_TODO_DATA_ERROR = 'todos/PATCH_TODO_DATA_ERROR';
//TodoList 가져오는 함수
export const getTodos = () => async dispatch => {
    dispatch({ type: GET_TODO_DATA });
    try {
        const todoData = await getTodo();
        dispatch({ type: GET_TODO_DATA_SUCCESS, todoData });
    } catch (e) {
        dispatch ({ type: GET_TODO_DATA_ERROR, error : e});
    }
};
//TodoList 하나씩 가져오는 함수
export const detailTodos = (id) => async dispatch => {
    dispatch({ type: GET_O_TODO_DATA });
    try {
        const detailData = await detailTodo(id);
        dispatch({ type: GET_O_TODO_DATA_SUCCESS, detailData });
    } catch (e) {
        dispatch ({ type: GET_O_TODO_DATA_ERROR, error : e});
    }
};
//TodoList 추가하는 함수
export const postTodos = (data) => async dispatch => {
    dispatch({ type: POST_TODO_DATA });
    try {
        const postData = await postTodo(data);
        dispatch({ type: POST_TODO_DATA_SUCCESS, postData});
    } catch (e) {
        dispatch ({ type: POST_TODO_DATA_ERROR, error : e});
    }
};
//TodoList 삭제하는 함수
export const delTodos = (id) => async dispatch => {
    dispatch({ type: DEL_TODO_DATA });
    try {
        const delData = await delTodo(id);
        dispatch({ type: DEL_TODO_DATA_SUCCESS, delData});
    } catch (e) {
        dispatch ({ type: DEL_TODO_DATA_ERROR, error: e});
    }
};
//TodoList 수정하는 함수
export const putTodos = (id, data) => async dispatch => {
    dispatch({ type: PUT_TODO_DATA });
    try {
        const putData = await putTodo(id, data);
        dispatch({ type: PUT_TODO_DATA_SUCCESS, putData});
    } catch (e) {
        dispatch ({ type: PUT_TODO_DATA_ERROR, error : e});
    }
};
//패치하는 함수 //좋아요 체크용으로 쓸려고 남겨둠
export const patchTodos = (id, data) => async dispatch => {
    dispatch({ type: PATCH_TODO_DATA });
    try {
        const patchData = await patchTodo(id, data);
        dispatch({ type: PATCH_TODO_DATA_SUCCESS, patchData});
    } catch (e) {
        dispatch ({ type: PATCH_TODO_DATA_ERROR, error : e});
    }
};





import { getPost, postPost, delPost, patchPost, putPost, detailPost } from '../../Api/djangoapi';

//List 가져오기
export const GET_POST_DATA = 'posts/GET_POST_DATA';
export const GET_POST_DATA_SUCCESS = 'posts/GET_POST_DATA_SUCCESS';
export const GET_POST_DATA_ERROR = 'posts/GET_POST_DATA_ERROR';
//List 하나씩 가져오기
export const GET_O_POST_DATA = 'posts/GET_O_POST_DATA'
export const GET_O_POST_DATA_SUCCESS = 'posts/GET_O_POST_DATA_SUCCESS'
export const GET_O_POST_DATA_ERROR = 'posts/GET_O_POST_DATA_ERROR'
//List 추가
export const POST_POST_DATA = 'posts/POST_POST_DATA';
export const POST_POST_DATA_SUCCESS = 'posts/POST_POST_DATA_SUCCESS';
export const POST_POST_DATA_ERROR = 'posts/POST_POST_DATA_ERROR';
//List 삭제
export const DEL_POST_DATA = 'posts/DEL_POST_DATA';
export const DEL_POST_DATA_SUCCESS = 'posts/DEL_POST_DATA_SUCCESS';
export const DEL_POST_DATA_ERROR = 'posts/DEL_POST_DATA_ERROR';
//List 수정
export const PUT_POST_DATA = 'posts/PUT_POST_DATA';
export const PUT_POST_DATA_SUCCESS = 'posts/PUT_POST_DATA_SUCCESS'; 
export const PUT_POST_DATA_ERROR = 'posts/PUT_POST_DATA_ERROR';
//List patch
export const PATCH_POST_DATA = 'posts/PATCH_POST_DATA';
export const PATCH_POST_DATA_SUCCESS = 'posts/PATCH_POST_DATA_SUCCESS'; 
export const PATCH_POST_DATA_ERROR = 'posts/PATCH_POST_DATA_ERROR';

//List 가져오는 함수
export const getPosts = () => async dispatch => {
    dispatch({ type: GET_POST_DATA });
    try {
        const token = localStorage.getItem("token")
        const PostsData = await getPost(token);
        dispatch({ type: GET_POST_DATA_SUCCESS, PostsData });
    } catch (e) {
        dispatch({ type: GET_POST_DATA_ERROR, error : e});
    }
};
//List 하나씩 가져오는 함수
export const detailPosts = (id) => async dispatch => {
    dispatch({ type: GET_O_POST_DATA });
    try {
        const detailData = await detailPost(id);
        dispatch({ type: GET_O_POST_DATA_SUCCESS, detailData });
    } catch (e) {
        dispatch ({ type: GET_O_POST_DATA_ERROR, error : e});
    }
};
//List 추가하는 함수
export const postPosts = (data) => async dispatch => {
    dispatch({ type: POST_POST_DATA });
    try {
        const postData = await postPost(data);
        dispatch({ type: POST_POST_DATA_SUCCESS, postData });
    } catch (e) {
        dispatch ({ type: POST_POST_DATA_ERROR, error : e });
    }
};
//List 삭제하는 함수
export const delPosts = (id) => async dispatch => {
    dispatch({ type: DEL_POST_DATA });
    try {
        const delData = await delPost(id);
        dispatch({ type: DEL_POST_DATA_SUCCESS, delData});
    } catch (e) {
        dispatch ({ type: DEL_POST_DATA_ERROR, error: e});
    }
};
//List 수정하는 함수
export const putPosts = (id, data) => async dispatch => {
    dispatch({ type: PUT_POST_DATA });
    try {
        const putData = await putPost(id, data);
        dispatch({ type: PUT_POST_DATA_SUCCESS, putData});
    } catch (e) {
        dispatch ({ type: PUT_POST_DATA_ERROR, error : e});
    }
};
//List 패치하는 함수, 좋아요 체크용으로 쓸려고 남겨둠
export const patchPosts = (id, data) => async dispatch => {
    dispatch({ type: PATCH_POST_DATA });
    try {
        const patchData = await patchPost(id, data);
        dispatch({ type: PATCH_POST_DATA_SUCCESS, patchData});
    } catch (e) {
        dispatch ({ type: PATCH_POST_DATA_ERROR, error : e});
    }
};





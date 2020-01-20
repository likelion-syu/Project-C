import { getCat, postCat, delCat, patchCat, putCat, detailCat } from '../../Api/djangoapi';

//List 가져오기
export const GET_CAT_DATA = 'cats/GET_CAT_DATA';
export const GET_CAT_DATA_SUCCESS = 'cats/GET_CAT_DATA_SUCCESS';
export const GET_CAT_DATA_ERROR = 'cats/GET_CAT_DATA_ERROR';
//List 하나씩 가져오기
export const GET_O_CAT_DATA = 'cats/GET_O_CAT_DATA'
export const GET_O_CAT_DATA_SUCCESS = 'cats/GET_O_CAT_DATA_SUCCESS'
export const GET_O_CAT_DATA_ERROR = 'cats/GET_O_CAT_DATA_ERROR'
//List 추가
export const POST_CAT_DATA = 'cats/POST_CAT_DATA';
export const POST_CAT_DATA_SUCCESS = 'cats/POST_CAT_DATA_SUCCESS';
export const POST_CAT_DATA_ERROR = 'cats/POST_CAT_DATA_ERROR';
//List 삭제
export const DEL_CAT_DATA = 'cats/DEL_CAT_DATA';
export const DEL_CAT_DATA_SUCCESS = 'cats/DEL_CAT_DATA_SUCCESS';
export const DEL_CAT_DATA_ERROR = 'cats/DEL_CAT_DATA_ERROR';
//List 수정
export const PUT_CAT_DATA = 'cats/PUT_CAT_DATA';
export const PUT_CAT_DATA_SUCCESS = 'cats/PUT_CAT_DATA_SUCCESS'; 
export const PUT_CAT_DATA_ERROR = 'cats/PUT_CAT_DATA_ERROR';
//List patch
export const PATCH_CAT_DATA = 'cats/PATCH_CAT_DATA';
export const PATCH_CAT_DATA_SUCCESS = 'cats/PATCH_CAT_DATA_SUCCESS'; 
export const PATCH_CAT_DATA_ERROR = 'cats/PATCH_CAT_DATA_ERROR';

//List 가져오는 함수
export const getCats = () => async dispatch => {
    dispatch({ type: GET_CAT_DATA });
    try {
        const CatsData = await getCat();
        dispatch({ type: GET_CAT_DATA_SUCCESS, CatsData });
    } catch (e) {
        dispatch({ type: GET_CAT_DATA_ERROR, error : e});
    }
};
//List 하나씩 가져오는 함수
export const detailCats = (id) => async dispatch => {
    dispatch({ type: GET_O_CAT_DATA });
    try {
        const detailData = await detailCat(id);
        dispatch({ type: GET_O_CAT_DATA_SUCCESS, detailData });
    } catch (e) {
        dispatch ({ type: GET_O_CAT_DATA_ERROR, error : e});
    }
};
//List 추가하는 함수
export const postCats = (data) => async dispatch => {
    dispatch({ type: POST_CAT_DATA });
    try {
        const postData = await postCat(data);
        dispatch({ type: POST_CAT_DATA_SUCCESS, postData });
    } catch (e) {
        dispatch ({ type: POST_CAT_DATA_ERROR, error : e });
    }
};
//List 삭제하는 함수
export const delCats = (id) => async dispatch => {
    dispatch({ type: DEL_CAT_DATA });
    try {
        const delData = await delCat(id);
        dispatch({ type: DEL_CAT_DATA_SUCCESS, delData});
    } catch (e) {
        dispatch ({ type: DEL_CAT_DATA_ERROR, error: e});
    }
};
//List 수정하는 함수
export const putCats = (id, data) => async dispatch => {
    dispatch({ type: PUT_CAT_DATA });
    try {
        const putData = await putCat(id, data);
        dispatch({ type: PUT_CAT_DATA_SUCCESS, putData});
    } catch (e) {
        dispatch ({ type: PUT_CAT_DATA_ERROR, error : e});
    }
};
//List 패치하는 함수, 좋아요 체크용으로 쓸려고 남겨둠
export const patchCats = (id, data) => async dispatch => {
    dispatch({ type: PATCH_CAT_DATA });
    try {
        const patchData = await patchCat(id, data);
        dispatch({ type: PATCH_CAT_DATA_SUCCESS, patchData});
    } catch (e) {
        dispatch ({ type: PATCH_CAT_DATA_ERROR, error : e});
    }
};





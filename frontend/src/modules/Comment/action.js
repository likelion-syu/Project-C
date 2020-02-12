import axios from 'axios'

export const GET_COMMENT_DATA = 'comment/GET_COMMENT_DATA'
export const GET_COMMENT_DATA_SUCCESS = 'comment/GET_COMMENT_DATA_SUCCESS'
export const GET_COMMENT_DATA_FAIL = 'comment/GET_COMMENT_DATA_FAIL'

export const getComment = (id) => async dispatch => {
    dispatch({ type: GET_COMMENT_DATA })
    try {
        const res = await axios.get('/api/comments/'+id+'/post_comment')
        dispatch({ type: GET_COMMENT_DATA_SUCCESS, CommentsData: res.data})
    } catch (e) {
        dispatch({ type:GET_COMMENT_DATA_FAIL, error: e})
    }
};


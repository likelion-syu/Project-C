import axios from 'axios';

export const USER_DATA = "user/USER_DATA";
export const USER_DATA_SUCCESS = "user/USER_DATA_SUCCESS"
export const USER_DATA_ERROR = "user/USER_DATA_ERROR"


export const USER_LOGIN =  () => (dispatch, getState) => {
    dispatch({ type: USER_DATA});

    const token = getState().auth.token

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    if(token) {
        config.headers['Authorization'] = 'Token '+ token ;
    }

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_DATA_SUCCESS,
                payload: res.data
            });
    
        }).catch(e => {
            dispatch({
                type: USER_DATA_ERROR,
                error : e
        });
    });
}


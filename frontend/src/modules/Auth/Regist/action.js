import axios from 'axios';

export const REGIST_USER = "user/REGIST_USER";
export const REGIST_USER_SUCCESS = "user/REGIST_USER_SUCCESS"
export const REGIST_USER_FAIL = "user/REGIST_USER_FAIL"

export const registUser = (username, email, password) => async dispatch => {
    dispatch({type: REGIST_USER});
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const body = JSON.stringify({ username,email, password});
        const res = await axios.post("/api/auth/regist/", body, config)
        dispatch({type: REGIST_USER_SUCCESS, payload: res.data})
    } catch(e) {
        dispatch({type: REGIST_USER_FAIL, payload: e})
    }
}
// axios.post('/api/auth/regist/', {
//     username: username,
//     email: email,
//     password: values.password
// })
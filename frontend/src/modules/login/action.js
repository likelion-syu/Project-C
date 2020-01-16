import axios from "axios";

export const LOGIN = "login/LOGIN"

export const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
export const LOGIN_FAIL = "login/LOGIN_FAIL";

export const login = (username, password) => dispatch =>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({ username, password});

    axios
        .post("http://127.0.0.1:8000/api/auth/login/", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(e => {
            dispatch ({
                type: LOGIN_FAIL,
                error:e
            })
        })
}
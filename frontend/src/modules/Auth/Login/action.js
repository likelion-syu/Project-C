import axios from "axios";
import setAuthorizationToken from "../../../Authorization/authorization"

export const LOGIN = "login/LOGIN"

export const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
export const LOGIN_FAIL = "login/LOGIN_FAIL";

export const login = (username, password) => async dispatch => {
    dispatch({ type: LOGIN });
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const body = JSON.stringify({ username, password});
        const res = await axios.post("/api/auth/login/", body, config)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        localStorage.setItem("userData", JSON.stringify(res.data))
        setAuthorizationToken(res.data.token)
        dispatch({
            type: LOGIN_SUCCESS, payload: res.data
        });
    } catch(e) {
        dispatch ({
            type: LOGIN_FAIL,
            payload: e
        })
    }
}
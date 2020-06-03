import * as actionTypes from './actionTypes'
import axios from 'axios'

export const auth = (data, signup) => {
    return dispatch => {
        const userData = {
            ...data,
            returnSecureToken: true
        }
        console.log(userData)
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOCcWvU4i8sFtAryXQ_yB5w-GFsqWdcVY`
        if(!signup){
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOCcWvU4i8sFtAryXQ_yB5w-GFsqWdcVY`
        }
        dispatch(authStart())
        axios.post(url, userData)
        .then(res => {
            localStorage.setItem('userId',res.data.localId)
            localStorage.setItem('token', res.data.idToken)
            dispatch(authSuccess(res.data.localId, res.data.idToken))
        })
        .catch(err => {
            dispatch(authFailure(err.response.data.error));
        });
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (userId, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        token: token
    }
}

export const authFailure = (error) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: error
    }
}

export const authCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        
        if(!token){
            dispatch(logout())
        }
        else {
            const userId = localStorage.getItem('userId')
            dispatch(authSuccess(userId, token))
        }
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    return{
        type: actionTypes.LOGOUT
    }
}
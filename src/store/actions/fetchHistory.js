import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchHistoryStart = () => {
    return {
        type: actionTypes.FETCH_HISTORY_START
    }
}

export const fetchHistory = (userId) => {
    return dispatch => {
        dispatch(fetchHistoryStart())
        axios.get(`https://workout-app-a.firebaseio.com/${userId}.json`)
        .then(res => {
            console.log(res.data)
            dispatch(fetchHistorySuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchHistoryFailure(err))
        })
    }
}

export const fetchHistorySuccess = data => {
    return {
        type: actionTypes.FETCH_HISTORY_SUCCESS,
        data: data
    }
}

export const fetchHistoryFailure = error => {
    return {
        type: actionTypes.FETCH_HISTORY_FAILURE,
        error: error
    }
}
import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchHistoryStart = () => {
    return {
        type: actionTypes.FETCH_HISTORY_START
    }
}

export const fetchHistory = () => {
    return dispatch => {
        const userId = localStorage.getItem('userId')
        console.log(userId)
        dispatch(fetchHistoryStart())
        axios.get(`https://workout-app-a.firebaseio.com/${userId}.json`)
        .then(res => {
            let keys = []
            for(let key in Object.entries(res.data)){
                keys.push(Object.entries(res.data)[key][0])
            }
            if(keys.length > 30){
                dispatch(deleteHistory(keys[30]))
            }
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

export const deleteHistory = lastDayId => {
    return dispatch => {
        const userId = localStorage.getItem('userId')
        axios.delete(`https://workout-app-a.firebaseio.com/${userId}/${lastDayId}.json`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
}
import * as actionTypes from './actionTypes'
import axios from 'axios'

export const updateCountStart = () => {
    return {
        type: actionTypes.UPDATE_COUNT_START
    }
}

export const updateCount = (id, count) => {
    return dispatch => {
        const userId = localStorage.getItem('userId')
        axios.put(`https://workout-app-a.firebaseio.com/${userId}/workouttypes/${id}/count.json`, count)
        .then(res => {
            console.log(res.data)
            dispatch(updateCountSuccess)
        })
        .catch(error => {
            console.log(error)
            dispatch(updateCountFailure(error.data))
        })
    }
}

export const updateCountSuccess = () => {
    return {
        type: actionTypes.UPDATE_COUNT_SUCCESS
    }
}

export const updateCountFailure = error => {
    return {
        type: actionTypes.UPDATE_COUNT_FAILURE,
        error: error
    }
}
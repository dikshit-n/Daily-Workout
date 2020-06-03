import * as actionTypes from './actionTypes'
import axios from 'axios'

export const updateCountStart = () => {
    return {
        type: actionTypes.UPDATE_COUNT_START
    }
}

export const updateCount = (id, count, todaysId) => {
    return dispatch => {
        const userId = localStorage.getItem('userId')
        axios.put(`https://workout-app-a.firebaseio.com/${userId}/${todaysId}/workouttypes/${id}/count.json`, count)
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

export const deleteWorkoutType = (userId, todaysId, workoutTypeId) => {
    return dispatch => {
        dispatch(deleteWorkoutTypeStart())
        axios.delete(`https://workout-app-a.firebaseio.com/${userId}/${todaysId}/workouttypes/${workoutTypeId}.json`)
        .then(res => {
            console.log(res.data)
            dispatch(deleteWorkoutTypeSuccess())
        })
        .catch(err => {
            console.log(err)
            dispatch(deleteWorkoutTypeFailure())
        })
    }
}

export const deleteWorkoutTypeStart = () => {
    return {
        type: actionTypes.DELETE_WORKOUT_TYPE_START
    }
}

export const deleteWorkoutTypeSuccess = () => {
    return {
        type: actionTypes.DELETE_WORKOUT_TYPE_SUCCESS
    }
} 

export const deleteWorkoutTypeFailure = () => {
    return{
        type: actionTypes.DELETE_WORKOUT_TYPE_FAILURE
    }
}
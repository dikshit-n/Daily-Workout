import * as actionTypes from './actionTypes'
import axios from 'axios'

export const addWorkoutTypeInit = () => {
    return {
        type: actionTypes.ADD_WORKOUT_TYPE_INIT
    }
}

export const addWorkoutTypeStart = () => {
    return {
        type: actionTypes.ADD_WORKOUT_TYPE_START
    }
}

export const addWorkoutType = (value, userId, todaysId) => {
    return dispatch => {
        var data = {
            workoutType: value,
            count:0
        }
        dispatch(addWorkoutTypeStart())
        console.log(todaysId)
        axios.post(`https://workout-app-a.firebaseio.com/${userId}/${todaysId}/workouttypes.json`,data)
        .then(res => {
            dispatch(addWorkoutTypeSuccess())
        })
        .catch(error => {
            dispatch(addWorkoutTypeFailure(error))
        })
    }
}

export const addWorkoutTypeSuccess = () => {
    return {
        type: actionTypes.ADD_WORKOUT_TYPE_SUCCESS
    }
}

export const addWorkoutTypeFailure = error => {
    return {
        type: actionTypes.ADD_WORKOUT_TYPE_FAILURE,
        error: error
    }
}
import * as actionTypes from './actionTypes'
import axios from 'axios'

export const showWorkoutTypesStart = () => {
    return {
        type: actionTypes.SHOW_WORKOUT_TYPES_START
    }
}

export const showWorkoutTypes = (todaysId) => {
    return dispatch => {
        const userId = localStorage.getItem('userId')
        dispatch(showWorkoutTypesStart())
        axios.get(`https://workout-app-a.firebaseio.com/${userId}/${todaysId}/workouttypes.json`)
        .then(res => {
            const showWorkoutTypes = []
            for( let key in res.data ){
                showWorkoutTypes.push({
                    ...res.data[key],
                    id: key
                })
            }
            dispatch(showWorkoutTypesSuccess(showWorkoutTypes))
        })
        .catch(error => {
            dispatch(showWorkoutTypesFailure())
        })
    }
}

export const showWorkoutTypesSuccess = (showWorkoutTypes) => {
    return{
        type: actionTypes.SHOW_WORKOUT_TYPES_SUCCESS,
        showWorkoutTypes: showWorkoutTypes
    }
}

export const showWorkoutTypesFailure = () => {
    return{
        type: actionTypes.SHOW_WORKOUT_TYPES_FAILURE
    }
}
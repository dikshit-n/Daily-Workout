import * as actionTypes from './actionTypes'
import axios from 'axios'

export const showWorkoutTypesStart = () => {
    return {
        type: actionTypes.SHOW_WORKOUT_TYPES_START
    }
}

export const showWorkoutTypes = (todaysId) => {
    console.log(todaysId)
    return dispatch => {
        const userId = localStorage.getItem('userId')
        dispatch(showWorkoutTypesStart())
        axios.get(`https://workout-app-a.firebaseio.com/${userId}/${todaysId}/workouttypes.json`)
        .then(res => {
            const WorkoutTypes = []
            for( let key in res.data ){
                WorkoutTypes.push({
                    ...res.data[key],
                    show: true,
                    id: key
                })
            }
            dispatch(showWorkoutTypesSuccess(WorkoutTypes))
        })
        .catch(error => {
            console.log(error)
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
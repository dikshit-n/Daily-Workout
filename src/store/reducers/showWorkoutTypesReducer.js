import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    workoutTypes: []
}

const showWorkoutTypesReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.SHOW_WORKOUT_TYPES_SUCCESS):
            return {
                ...state,
                loading: false,
                workoutTypes: action.showWorkoutTypes
            }
        case(actionTypes.SHOW_WORKOUT_TYPES_FAILURE):
            return {
                ...state,
                loading: false
            }
        case(actionTypes.SHOW_WORKOUT_TYPES_START):
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default showWorkoutTypesReducer
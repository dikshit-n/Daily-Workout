import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: true,
    workoutTypes: []
}

const showWorkoutTypesReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.SHOW_WORKOUT_TYPES_START):
            return {
                ...state,
                loading: true
            }
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
        default:
            return state
    }
}

export default showWorkoutTypesReducer
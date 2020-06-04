import * as actionTypes from '../actions/actionTypes'

const initialState = {
    // Update Count
    loading: false,
    error: false,
    submitSuccess: false,

    // Delete WorkoutType
    deleteLoading: false,
    deleteSuccess: false,
    deleteError: false
}

const updateCountReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.UPDATE_COUNT_START):
            return {
                ...state,
                loading: true
            }
        case(actionTypes.UPDATE_COUNT_SUCCESS):
            return {
                ...state,
                loading: false,
                submitSuccess: true
            }
        case(actionTypes.UPDATE_COUNT_FAILURE):
            return {
                ...state,
                loading: false,
                error: true
            }
        case(actionTypes.DELETE_WORKOUT_TYPE_START):
            return{
                ...state,
                deleteSuccess: false,
                deleteLoading: true
            }
        case(actionTypes.DELETE_WORKOUT_TYPE_SUCCESS):
            return{
                ...state,
                deleteSuccess: true,
                deleteLoading: false
            }
        case(actionTypes.DELETE_WORKOUT_TYPE_FAILURE):
            return{
                ...state,
                deleteLoading: false,
                deleteError: true
            }
        default:
            return state
    }
}

export default updateCountReducer
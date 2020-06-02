import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading:false,
    error: null,
    added: true
}

const addWorkoutTypeReducer = (state = initialState, action ) => {
    switch(action.type){
        case(actionTypes.ADD_WORKOUT_TYPE_INIT):
            return{
                ...state,
                loading:false,
                error: null,
                added: false
            }
        case(actionTypes.ADD_WORKOUT_TYPE_START):
            return{
                ...state,
                loading: true,
                error: null,
                added: false
            }
        case(actionTypes.ADD_WORKOUT_TYPE_SUCCESS):
            return{
                ...state,
                loading: false,
                error: null,
                added: true
            }
        case(actionTypes.ADD_WORKOUT_TYPE_FAILURE):
            return{
                ...state,
                loading: false,
                error: action.error,
                added: false
            }
        default: 
            return state
    }
}

export default addWorkoutTypeReducer
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: false,
    submitSuccess: false,
    deleteSucccess: false,
    deleteError: false
}

const updateCountReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.UPDATE_COUNT_START):
            return {
                deleteSucccess: false,
                submitSuccess: false,
                loading: true,
                error: false,
                deleteError: false
            }
        case(actionTypes.UPDATE_COUNT_SUCCESS):
            return {
                deleteSucccess: false,
                loading: false,
                error: false,
                submitSuccess: true,
                deleteError: false
            }
        case(actionTypes.UPDATE_COUNT_FAILURE):
            return {
                deleteSucccess: false,
                submitSuccess: false,
                loading: false,
                error: true,
                deleteError: false
            }
        case(actionTypes.DELETE_WORKOUT_TYPE_START):
            return{
                deleteSucccess: false,
                loading: true,
                error: false,
                submitSuccess: false,
                deleteError: false
            }
        case(actionTypes.DELETE_WORKOUT_TYPE_SUCCESS):
            return{
                deleteSucccess: true,
                loading: false,
                error: false,
                submitSuccess: false,
                deleteError: false
            }
        case(actionTypes.DELETE_WORKOUT_TYPE_FAILURE):
            return{
                deleteSucccess: false,
                loading: true,
                error: false,
                submitSuccess: false,
                deleteError: true
            }
        default:
            return state
    }
}

export default updateCountReducer
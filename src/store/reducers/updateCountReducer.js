import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: false
}

const updateCountReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.UPDATE_COUNT_START):
            return {
                loading: true,
                error: false
            }
        case(actionTypes.UPDATE_COUNT_SUCCESS):
            return {
                loading: false,
                error: false
            }
        case(actionTypes.UPDATE_COUNT_FAILURE):
            return {
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default updateCountReducer
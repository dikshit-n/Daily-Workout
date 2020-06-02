import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: null,
    token: null,
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.AUTH_START):
            return {
                ...state,
                loading: true,
                error: null
            }
        case(actionTypes.AUTH_SUCCESS):
            return {
                ...state,
                loading: false,
                error: null,
                userId: action.userId,
                token: action.token
            }
        case(actionTypes.AUTH_FAILURE):
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case(actionTypes.LOGOUT):
            return {
                ...state,
                userId: null,
                token: null
            }
        default:
            return state
    }
}

export default authReducer
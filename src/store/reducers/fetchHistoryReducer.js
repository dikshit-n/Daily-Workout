import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: null,
    history: []
}

const convertData = data => {
    let historyData = []
    for(let key in data){
        const [ day, date, month, year ] = key.split("-")
        let workoutTypes = []
        for(let key2 in data[key].workouttypes){
            workoutTypes.push({
                id: key2,
                name: data[key].workouttypes[key2].workoutType,
                count: data[key].workouttypes[key2].count,
                display: false
            })
        }
        console.log(workoutTypes)
        historyData.push({
            id: key,
            day: day,
            date: date,
            month: month,
            year: year,
            workoutTypes: [...workoutTypes]
        })
    }
    console.log(historyData)
    return [...historyData]
}

const fetchHistoryReducer = (state = initialState, action)  => {
    switch(action.type){
        case(actionTypes.FETCH_HISTORY_START):
            return {
                ...state,
                loading: true,
            }
        case(actionTypes.FETCH_HISTORY_SUCCESS):
            return {
                ...state,
                loading: false,
                error: null,
                history: convertData(action.data)
            }
        case(actionTypes.FETCH_HISTORY_FAILURE):
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state
    }
}

export default fetchHistoryReducer
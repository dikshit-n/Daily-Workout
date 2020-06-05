import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index'
import EachHistory from './EachHistory/eachHistory'
import Spinner from '../UI/Spinner/Spinner'
import classes from './history.css'

const History = props => {

    const { onFetchHistory } = props

    useEffect(() => {
        onFetchHistory()
    }, [onFetchHistory])
    console.log(props.data)

    let output = <Spinner />
    if(props.data.length !== 0){
        output = (
            props.data.map(eachHistory => <EachHistory
                id={eachHistory.id}
                key={eachHistory.id}
                day={eachHistory.day}
                date={eachHistory.date}
                month={eachHistory.month}
                year={eachHistory.year}
                data = {props.data}
            />)
        )
    }
    else if(props.data.length === 0 && !props.loading){
        output = <h3>No History</h3>
    }

    return (
        <div className={classes.HistoryContainer} >
            {output}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.fetchHistoryReducer.history,
        loading: state.fetchHistoryReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchHistory: () => dispatch(actions.fetchHistory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
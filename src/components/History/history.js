import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index'
import EachHistory from './EachHistory/eachHistory'
import Spinner from '../UI/Spinner/Spinner'
import classes from './history.css'

const History = props => {

    useEffect(() => {
        console.log(props.userId)
        props.onFetchHistory(props.userId)
    }, [])
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

    return (
        <div className={classes.HistoryContainer} >
            {output}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.fetchHistoryReducer.history,
        userId: state.authReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchHistory: (userId) => dispatch(actions.fetchHistory(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { withRouter } from 'react-router' 

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import WorkoutType from './WorkoutType/WorkoutType'
import classes from './WorkoutTypes.css'
import * as actions from '../../../store/actions/index'
import Spinner from '../../UI/Spinner/Spinner'

const WorkoutTypes = props => {

    const [state, setState] = useState([])
    const { onLoad, added } = props

    useEffect(() => {
        setState(props.WorkoutTypes)
    }, [props.WorkoutTypes])

    useEffect(() => {
        if(added){
            const todaysId = getTodaysId()
            onLoad(todaysId)
        }
    },[onLoad, added])

    const getTodaysId = () => {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      
        const date = new Date()
        let todaysId = days[date.getDay()] + "-" + date.getDate() + "-"  + months[date.getMonth()] + "-"  + date.getFullYear()
        console.log( "getTodaysId  " + todaysId)

        return todaysId.toString()
    }

    const updateCount = (id, event) => {
        var count = event.target.value
        var updatedState = [...state]
        updatedState.map(el => {
            if(el.id === id){
                el.count = count
            }
            return null
        })
        setState(updatedState)
    }

    const countSubmit = (id, event) => {
        event.preventDefault()
        var value = 0 
        for(let key in state){
            if(state[key].id === id){
                value = state[key].count
            }
        }
        const todaysId = getTodaysId()
        props.onUpdateCount(id, value, todaysId)
    }

    const deleteWorkoutType = (id) => {
        console.log("delete")
        props.onDeleteWorkoutType(props.userId, getTodaysId(), id)
    }

    let output = <Spinner />
    if(!props.loading){
        if(state.length === 0){
            output=<p>Start Your Workout</p>
        }else
        output = state.map(workoutType => (<WorkoutType key={workoutType.id} onDelete={deleteWorkoutType} id={workoutType.id} onChange={updateCount} onSubmit={countSubmit} count={workoutType.count} workoutType={workoutType.workoutType} />))
    }
    return (
        <div className={classes.WorkoutTypes} >
            {output}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        loading: state.showWorkoutTypesReducer.loading,
        WorkoutTypes: state.showWorkoutTypesReducer.workoutTypes,
        added: state.addWorkoutTypeReducer.added,
        userId: state.authReducer.userId,
        deleteSuccess: state.updateCountReducer.deleteSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: (todaysId) => dispatch(actions.showWorkoutTypes(todaysId)),
        onUpdateCount: (id, value, todaysId) => dispatch(actions.updateCount(id, value, todaysId)),
        onDeleteWorkoutType: (userId, todaysId, workoutTypeId) => dispatch(actions.deleteWorkoutType(userId, todaysId, workoutTypeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( withErrorHandler(withRouter(WorkoutTypes), axios))
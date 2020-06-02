import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import WorkoutType from './WorkoutType/WorkoutType'
import classes from './WorkoutTypes.css'
import * as actions from '../../../store/actions/index'
import Spinner from '../../UI/Spinner/Spinner'

const WorkoutTypes = props => {

    const [state, setState] = useState([])
    const { onLoad, added } = props

    useEffect(() => {
        console.log(props.WorkoutTypes)
        setState(props.WorkoutTypes)
    }, [props.WorkoutTypes])

    useEffect(() => {
        if(added){
            onLoad()
        }
    },[onLoad, added])

    const updateCount = (id, event) => {
        console.log()
        var count = event.target.value
        var updatedState = [...state]
        updatedState.map(el => {
            if(el.id == id){
                el.count = count
            }
        })
        setState(updatedState)
    }

    const countSubmit = (id, event) => {
        event.preventDefault()
        console.log(id)
        var value = 0 
        for(let key in state){
            if(state[key].id === id){
                value = state[key].count
            }
        }
        console.log(value)
        props.onUpdateCount(id, value)
    }

    console.log("Workout Types")
    console.log(state)
    let output = <Spinner />
    if(!props.loading){
        if(state.length === 0){
            output=<p>Start Your Workout</p>
        }else
        output = state.map(workoutType => (<WorkoutType key={workoutType.id} id={workoutType.id} onChange={updateCount} onSubmit={countSubmit} count={workoutType.count} workoutType={workoutType.workoutType} />))
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
        added: state.addWorkoutTypeReducer.added
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(actions.showWorkoutTypes()),
        onUpdateCount: (id, value) => dispatch(actions.updateCount(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( withErrorHandler(WorkoutTypes, axios))
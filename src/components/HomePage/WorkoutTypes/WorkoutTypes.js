import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { withRouter } from 'react-router' 

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import WorkoutType from './WorkoutType/WorkoutType'
import classes from './WorkoutTypes.css'
import * as actions from '../../../store/actions/index'
import Spinner from '../../UI/Spinner/Spinner'
import getTodaysId from '../../../hoc/getTodaysId/getTodaysId'

var counterId = null
var deleteWorkoutTypeId = null
var newState = []
var updatedLoadingInfo = []
var updatedDeleteLoadingInfo = []

const WorkoutTypes = React.memo(props => {

    const [state, setState] = useState([])
    const { onLoad, added, isAuth } = props
    
    useEffect(() => {
        newState = props.WorkoutTypes

        let withLoadingInfo = []

        for( let key in props.WorkoutTypes ){
            withLoadingInfo[props.WorkoutTypes[key].id] = {loading: false}
        }

        updatedLoadingInfo = withLoadingInfo

        let withDeleteLoadingInfo = []

        for( let key in props.WorkoutTypes ){
            withDeleteLoadingInfo[props.WorkoutTypes[key].id] = {deleteLoading: false}
        }

        updatedDeleteLoadingInfo = withDeleteLoadingInfo

        setState(props.WorkoutTypes)

    }, [props.WorkoutTypes])


    useEffect(() => {

        if((added && isAuth) || (added && !isAuth) ){
            console.log(added,isAuth)
            onLoad(getTodaysId())

        }

    },[onLoad, added, isAuth])


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

        counterId = id

        props.onUpdateCount(id, value, getTodaysId())

    }


    const deleteWorkoutType = (id) => {

        deleteWorkoutTypeId = id

        props.onDeleteWorkoutType(getTodaysId(), id)

    }


    // Loading States

    if(counterId !== null){

        for( let key in updatedLoadingInfo ){

            if(key === counterId && props.counterLoading){

                updatedLoadingInfo[key].loading = true

            }

            else{

                updatedLoadingInfo[key].loading = false

            }
        }
    }

    if(deleteWorkoutTypeId !== null){

        for( let key in updatedDeleteLoadingInfo ){

            if(key === deleteWorkoutTypeId && props.deleteLoading){

                updatedDeleteLoadingInfo[key].deleteLoading = true

            }
            else{

                updatedDeleteLoadingInfo[key].deleteLoading = false

            }
        }

    }

    // Delete Success
    if(props.deleteSuccess){

        newState = newState.map(el => {

            if(el.id === deleteWorkoutTypeId)
            
                el.show = false

            return el

        })
        newState = newState.filter(el => el.id !== deleteWorkoutTypeId)
    }

    // Total Output
    let output = <Spinner />

    if(!props.loading ){

        if(state.length === 0 || newState.length === 0)

        output=<p>Start Your Workout</p>

        else
        output = newState.map(workoutType => {

            return(<WorkoutType key={workoutType.id}
                
                onDelete={deleteWorkoutType} 
                
                id={workoutType.id} 

                loading = {updatedLoadingInfo[workoutType.id].loading}
                
                onChange={updateCount} 
                
                show = {workoutType.show}

                onSubmit={countSubmit} 
                
                count={workoutType.count} 
                
                workoutType={workoutType.workoutType}

                deleteLoading = {updatedDeleteLoadingInfo[workoutType.id].deleteLoading}
                
            />)}
        )

    }


    return (

        <div className={classes.WorkoutTypes} >

            {state.length === 0 || newState.length === 0 ? <p>Start Your Workout</p> : output}

        </div>
    )
})

const mapStateToProps = state => {
    return{

        loading: state.showWorkoutTypesReducer.loading,

        WorkoutTypes: state.showWorkoutTypesReducer.workoutTypes,

        added: state.addWorkoutTypeReducer.added,

        deleteSuccess: state.updateCountReducer.deleteSuccess,

        counterLoading: state.updateCountReducer.loading,

        submitSuccess: state.updateCountReducer.submitSuccess,

        error: state.updateCountReducer.error,

        deleteLoading: state.updateCountReducer.deleteLoading,

        isAuth: state.authReducer.token !== null

    }
}

const mapDispatchToProps = dispatch => {

    return {

        onLoad: (todaysId) => dispatch(actions.showWorkoutTypes(todaysId)),

        onUpdateCount: (id, value, todaysId) => dispatch(actions.updateCount(id, value, todaysId)),

        onDeleteWorkoutType: (todaysId, workoutTypeId) => dispatch(actions.deleteWorkoutType(todaysId, workoutTypeId))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)( withErrorHandler(withRouter(WorkoutTypes), axios))
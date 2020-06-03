import React from 'react'

import classes from './WorkoutType.css'
import { connect } from 'react-redux'

const WorkoutType = props => {
    console.log("rerender")
    var style = {
        backgroundColor: props.submitSuccess ? "green" : props.loading ? "blue" : props.error ? "red" : "white"
    }
    return (
        <div className={classes.WorkoutType} >
            <div>{props.workoutType} <div onClick={() => props.onDelete(props.id)} className={classes.delete}></div> </div>
            <form onSubmit={event => props.onSubmit(props.id, event)} className={classes.form} >
                <input required className={classes.count} type="number" onChange={event => props.onChange(props.id, event)} value={props.count} />
                <button type="submit" className={classes.Submit}
                    style={style}
                ></button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        loading: state.updateCountReducer.loading,
        submitSuccess: state.updateCountReducer.submitSuccess,
        error: state.updateCountReducer.error
    }
}

export default connect(mapStateToProps)(WorkoutType)
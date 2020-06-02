import React from 'react'

import classes from './WorkoutType.css'

const WorkoutType = props => {
    return (
        <div className={classes.WorkoutType} >
            <div>{props.workoutType}</div>
            <form onSubmit={event => props.onSubmit(props.id, event)} >
                <input type="number" onChange={event => props.onChange(props.id, event)} value={props.count} />
            </form>
        </div>
    )
}

export default WorkoutType
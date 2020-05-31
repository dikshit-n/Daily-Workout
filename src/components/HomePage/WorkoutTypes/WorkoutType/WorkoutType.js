import React from 'react'

import classes from './WorkoutType.css'

const WorkoutType = props => {
    return (
        <div className={classes.WorkoutType} >
            <div>{props.workoutType}</div>
            <div>{props.count}</div>
        </div>
    )
}

export default WorkoutType
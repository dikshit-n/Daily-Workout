import React from 'react'

import classes from './workoutType.css'

const WorkoutType = props => {
    // props.id
    return <div className={classes.WorkoutType} > {props.name} {props.count} </div>        
}

export default WorkoutType
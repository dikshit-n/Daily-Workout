import React from 'react'

import WorkoutType from './WorkoutType/WorkoutType'
import classes from './WorkoutTypes.css'

const WorkoutTypes = props => {
    return (
        <div className={classes.WorkoutTypes} >
            {props.workoutTypes.map( (workoutType, index) => <WorkoutType key={index} workoutType={workoutType.name} count={workoutType.count} /> )}
        </div>
    )
}

export default WorkoutTypes
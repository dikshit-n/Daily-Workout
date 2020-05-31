import React from 'react'

import WorkoutTypes from './WorkoutTypes/WorkoutTypes'

const HomePage = props => {
    return(
        <WorkoutTypes workoutTypes={[{name: "Push Ups", count: 6}, {name: "Thumb builds", count: 100}, {name: "Skipping", count: 200}]} />
    )
}

export default HomePage
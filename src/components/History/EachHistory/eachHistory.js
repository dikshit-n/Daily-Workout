import React, { useState } from 'react'

import  WorkoutType from './workoutType/workoutType'
import classes from './eachHistory.css'
import Fade from '../../../hoc/AnimationDelay/animationDelay'

const EachHistory = props => {
    const [details, setState] = useState([])
    const [showDetails, setShowDetails] = useState(false)

    const showDetailsHandler = (id) => {
        setShowDetails(!showDetails)
        let temporary = props.data
        let newDetails = []
        newDetails = temporary.map(eachData => {
            if(id === eachData.id){
                return [...eachData.workoutTypes]
            }
            return null
        })
        setState([...newDetails])
    }
    let output = null
    if(details.length !== 0 && showDetails ){
        output = details[0].map(workoutType => <WorkoutType key={workoutType.id} id={workoutType.id} name={workoutType.name} count={workoutType.count} />)
    }
    return(
        <div className = {classes.eachHistory} onClick={() => showDetailsHandler(props.id)} >
            <div>
                {props.day}
            </div>
            <div>
                {props.date} {props.month} {props.year}
            </div>
            <Fade show={showDetails}>
                <div>
                    {output}
                </div>
            </Fade>
        </div>
    )
}

export default EachHistory
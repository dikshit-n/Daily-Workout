import React, { useState } from 'react'

import  WorkoutType from './workoutType/workoutType'
import classes from './eachHistory.css'

const EachHistory = props => {
    const [details, setState] = useState([])

    const showDetailsHandler = (id) => {
        console.log(id)
        let temporary = props.data
        let newDetails = []
        newDetails = temporary.map(eachData => {
            if(id === eachData.id){
                console.log(eachData)
            return [...eachData.workoutTypes]}
        })
        setState([...newDetails])
        console.log([...newDetails])
    }
    console.log(details)
    let output = null
    if(details.length !== 0){
        output = details[0].map(workoutType => <WorkoutType key={workoutType.id} id={workoutType.id} name={workoutType.name} count={workoutType.count} />)
    }
    console.log(output)
    return(
        <div className = {classes.eachHistory} onClick={() => showDetailsHandler(props.id)} >
            <div>
                {props.day}
            </div>
            <div>
                {props.date} {props.month} {props.year}
            </div>
            <div>
                {output}
            </div>
        </div>
    )
}

export default EachHistory
import React, { useState } from 'react'

import  WorkoutType from './workoutType/workoutType'
import classes from './eachHistory.css'
import Fade from '../../../hoc/AnimationDelay/animationDelay'

const EachHistory = props => {
    const [details, setState] = useState([])
    const [showDetails, setShowDetails] = useState(false)

    let animation = [ showDetails ?  classes.showDetails : classes.shrink]

    const showDetailsHandler = (id) => {
        setShowDetails(!showDetails)
        let temporary = props.data
        let newDetails
        newDetails = temporary.filter(eachData => eachData.id === id)
        setState(newDetails[0].workoutTypes)
    }
    let output = null
    if(details.length !== 0){
        output = details.map(workoutType => <WorkoutType key={workoutType.id} id={workoutType.id} name={workoutType.name} count={workoutType.count} />)
    }
    console.log(details)

    return(
        <div className={classes.eachHistory} style={{animation: `${classes.show} 1s`}} >
            <div className={animation.join(' ')} onClick={() => showDetailsHandler(props.id)} >
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
        </div>
    )
}

export default EachHistory

// style = {{ animation: `${showDetails ? classes.showDetails : classes.shrink} 2s` }} 
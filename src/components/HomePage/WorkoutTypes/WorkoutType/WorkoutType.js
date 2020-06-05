import React from 'react'

import classes from './WorkoutType.css'
import DeleteIcon from '../../../UI/DeleteIcon/deleteIcon'
import SmallSpinner from '../../../UI/Spinner/SmallSpinner/smallSpinner'
import Fade from '../../../../hoc/AnimationDelay/animationDelay'
import SmallSendButton from '../../../UI/Button/smallSendButton/smallSendButton'



const WorkoutType = props => {

    let button = <SmallSendButton />

    let del = <div className={classes.container} > <DeleteIcon onClick={() => props.onDelete(props.id)} /> </div>

    if(props.loading){

        button = <SmallSpinner />

    }

    if(props.deleteLoading){

        del = <div className={classes.container} > <SmallSpinner /> </div>

    }

    return (
        <Fade show={props.show}>
            <div className={classes.WorkoutType} >

                <div className={classes.name} >
                    <div>
                        {props.workoutType} 
                    </div>

                    {del}

                </div>


                <form onSubmit={event => props.onSubmit(props.id, event)} className={classes.form} >

                    <input required className={classes.count} type="number" onChange={event => props.onChange(props.id, event)} value={props.count} />

                    {button}

                </form>

            </div> 
        </Fade>
    )
}


export default WorkoutType
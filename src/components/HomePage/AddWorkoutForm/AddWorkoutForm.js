import React from 'react'

import classes from './AddWorkoutForm.css'
import AddIcon from '@material-ui/icons/Add';

const AddWorkoutForm = props => {
    return(
        <form className={classes.AddWorkoutForm} onSubmit={props.onSubmit} >
            <div className={classes.fakeTextBox} >
                <AddIcon />
                <input className={classes.textbox} type="text" value={props.value} name="workoutType" placeholder="Type" />
            </div>
        </form>
    )
}

export default AddWorkoutForm
import React from 'react'

import AddIcon from '@material-ui/icons/Add';
import classes from './AddWorkoutTypeButton.css'

const AddWorkoutTypeButton = props => {
    return (
        <div className={classes.AddWorkoutType} onClick={props.onClick} >
            <AddIcon />
        </div>
    )
}

export default AddWorkoutTypeButton
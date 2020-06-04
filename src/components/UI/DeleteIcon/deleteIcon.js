import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete';
import classes from './deleteIcon.css'

const deleteIcon = props => {
    return <DeleteIcon onClick={props.onClick} className={classes.delete} fontSize="small" />
}

export default deleteIcon
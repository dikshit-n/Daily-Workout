import React from 'react'

import classes from './Textbox.css'
import AddIcon from '@material-ui/icons/Add';

const TextBox = props => {
    return (
        <form className={classes.fakeTextBox} onSubmit={(event) => props.onSubmit(event)} >
            <AddIcon />
            <input className={classes.textbox} required type={props.type} value={props.value} placeholder={props.placeholder} onChange={event => props.onChange(event)} />
            <div className={classes.position} >
                <button  type="submit" required disabled={props.disabled} className={classes.myButton} onClick={(event) => props.onSubmit(event)}> Add </button>
            </div>
        </form>
    )
}

export default TextBox
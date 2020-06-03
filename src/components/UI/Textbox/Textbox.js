import React from 'react'

import classes from './Textbox.css'
import AddIcon from '@material-ui/icons/Add';

const TextBox = props => {
    return (
        <div className={classes.fakeTextBox} >
            {props.showIcon ? <AddIcon /> : null} 
            <input name={props.name} className={classes.textbox} required type={props.type} value={props.value} placeholder={props.placeholder} onChange={event => props.onChange(event)} />
        </div>
    )
}

export default TextBox
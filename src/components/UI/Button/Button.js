import React from 'react'

import classes from './Button.css'

const Button = props =>{
    return (
        <div className={classes.position} >
            <button  type={props.type} required disabled={props.disabled} className={classes.myButton} onClick={(event) => props.onClick(event)}>{props.displayValue} </button>
        </div>
    )
}

export default Button
import React from 'react'

import classes from './smallSpinner.css'
import SmallSpinnerSVG from '../../../../SVG/SmallSpinner/SmallSpinner.svg'

const SmallSpinner = props => {
    return (
        <div className={classes.smallSpinner} >
            <img width="20px" height="20px" src={SmallSpinnerSVG} alt="o" />
        </div>
    )
}

export default SmallSpinner
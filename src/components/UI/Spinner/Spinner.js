import React from 'react'

import classes from './Spinner.css'

const Spinner = () => {

    let two = [classes.loader, classes.multiRipple]

    return (
        <div className={classes.loaderContainer}>
        <div className={two.join(' ')}>
          <div></div>
          <div></div>
        </div>
      </div>
    )
}

export default Spinner
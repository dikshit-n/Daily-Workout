import React from 'react'

import classes from './smallSendButton.css'
import sendIcon from '../../../../SVG/SendIcon/sendIcon.svg'

const SmallSendButton = props => <button type="submit" className={classes.Submit}> <img src={sendIcon} alt="o" width={15} height={15} /> </button>

export default SmallSendButton
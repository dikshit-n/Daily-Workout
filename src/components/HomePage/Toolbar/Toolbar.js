import React, { useState } from 'react' 

import classes from './Toolbar.css'
import AddWorkoutTypeButton from './AddWorkoutTypeButton/AddWorkoutTypeButton'
import AddWorkoutForm from '../AddWorkoutForm/AddWorkoutForm'
import Modal from '../../UI/Modal/Modal'

const Toolbar = props => {

    const [show, setState] = useState(false)

    const toggle = () => {
        setState(!show)
    }

    return (
        <div className={classes.Toolbar} >
            <h3>Workout</h3>
            <Modal show={show} onClick={toggle} > <AddWorkoutForm onSubmit={() => { }} /> </Modal>
            <AddWorkoutTypeButton onClick={toggle} />
        </div>
    )
}

export default Toolbar 
import React, { useState } from 'react' 
import { Redirect, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'
import classes from './Toolbar.css'
import AddWorkoutTypeButton from './AddWorkoutTypeButton/AddWorkoutTypeButton'
import AddWorkoutForm from '../AddWorkoutForm/AddWorkoutForm'
import Modal from '../../UI/Modal/Modal'

const Toolbar = props => {

    const [show, setState] = useState(false)

    const open = () => {
        setState(true)
        props.onAddWorkoutTypeInit()
    }

    const close = () => {
        setState(false)
    }

    let redirect = null
    let modal = <Modal show={show} onClick={close} > <AddWorkoutForm /> </Modal>

    if(props.workoutTypes){
        redirect = <Redirect to="/" />
    }
    if(props.added){
        modal = null
    }

    console.log(props.isAuth)

    return (
        <div className={classes.Toolbar} >
            {redirect}
            <h3>Workout</h3>
            <Link to={props.isAuth ? "/logout" : "/auth"}><h4>{props.isAuth ? 'Logout' : 'Auth'}</h4></Link>
            {modal}
            <AddWorkoutTypeButton onClick={open} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        added: state.addWorkoutTypeReducer.added,
        workoutTypes: state.showWorkoutTypesReducer.workoutTypes,
        isAuth: state.authReducer.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddWorkoutTypeInit: () => dispatch(actions.addWorkoutTypeInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(Toolbar, axios))) 
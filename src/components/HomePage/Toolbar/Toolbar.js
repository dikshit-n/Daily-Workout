import React, { useState } from 'react' 
import { Redirect, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'
import classes from './Toolbar.css'
import AddWorkoutTypeButton from '../../UI/AddWorkoutTypeButton/AddWorkoutTypeButton'
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

    if(props.workoutTypes){
        redirect = <Redirect to="/" />
    }

    return (
        <div className={classes.Toolbar} >
            {redirect}
            <h3>Workout</h3>
            <nav>
                <Link to="/"><h4>Home</h4></Link>
                <Link to={props.isAuth ? "/logout" : "/auth"}><h4>{props.isAuth ? 'Logout' : 'Auth'}</h4></Link>
                {props.isAuth ? <Link to="/history"><h4>History</h4></Link> : null}
            </nav>
            <Modal show={show && !props.added} onClick={close} > <AddWorkoutForm /> </Modal>
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
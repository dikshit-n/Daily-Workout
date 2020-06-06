import React, { useState } from 'react' 
import { Redirect, withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'
import classes from './Toolbar.css'
import AddWorkoutTypeButton from '../../UI/AddWorkoutTypeButton/AddWorkoutTypeButton'
import AddWorkoutForm from '../AddWorkoutForm/AddWorkoutForm'
import Modal from '../../UI/Modal/Modal'
import NavigationBar from '../../UI/NavigationBar/NavigationBar'
import NavigationItem from '../../UI/NavigationBar/NavigationItem/NavigationItem'

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
            
            <NavigationBar links = {[
                
                <NavigationItem to='/' exact > Home </NavigationItem>,
                props.isAuth ? <NavigationItem exact to="/history" > History </NavigationItem> : <NavigationItem to="/auth" > Authenticate </NavigationItem>,
                props.isAuth ? <NavigationItem exact to='/logout' > Logout </NavigationItem> : <NavigationItem to={null} />

            ]} >
                
            </NavigationBar>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Toolbar, axios))
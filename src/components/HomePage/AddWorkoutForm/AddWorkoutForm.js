import React, { memo, useState } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'
import classes from './AddWorkoutForm.css'
import TextBox from '../../UI/Textbox/Textbox';
import Spinner from '../../UI/Spinner/Spinner'
import Button from '../../UI/Button/Button';
import getTodaysId from '../../../hoc/getTodaysId/getTodaysId';

const AddWorkoutForm = memo( props => {

    const [value, setState] = useState('')
    const { onAddWorkoutType, isAuth } = props

    const changeHandler = event => {
        setState(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if(value !== '' && isAuth){
            onAddWorkoutType(value, props.userId, getTodaysId())
        }
    }

    const disabledInfo = value === '' || !isAuth
    const displayValue = !isAuth ? "Signup" : "Add"

    let form = <Spinner />
    if(!props.loading){
        form = <form onSubmit={event => handleSubmit(event)} >
            <TextBox 
                showIcon={false}
                name="workoutType"
                placeholder="Workout Type" 
                type="text" 
                value = {value} 
                onChange={changeHandler}
            />
            <Button tyep="submit" onClick={event => handleSubmit(event)} disabled={disabledInfo} displayValue = {displayValue} />
        </form> 
    }

    return(
        <div className={classes.AddWorkoutForm}  >
            {form}
        </div>
    )
})

const mapStatetoProps = state => {
    return {
        loading: state.addWorkoutTypeReducer.loading,
        error: state.addWorkoutTypeReducer.error,
        userId: state.authReducer.userId,
        isAuth: state.authReducer.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAddWorkoutType: (value, userId, todaysId) => dispatch(actions.addWorkoutType(value, userId, todaysId))
    }
  }

export default connect(mapStatetoProps, mapDispatchToProps)(AddWorkoutForm)
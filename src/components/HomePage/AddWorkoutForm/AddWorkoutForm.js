import React, { memo, useState } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'
import classes from './AddWorkoutForm.css'
import TextBox from '../../UI/Textbox/Textbox';
import Spinner from '../../UI/Spinner/Spinner'

const AddWorkoutForm = memo( props => {

    const [value, setState] = useState('')
    const {onAddWorkoutType} = props

    const changeHandler = event => {
        setState(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        value !== '' && onAddWorkoutType(value, props.userId)
    }

    let form = <Spinner />
    if(!props.loading){
        form = <TextBox 
                placeholder="Workout Type" 
                type="text" 
                value = {value} 
                onChange={changeHandler} 
                onSubmit={event => handleSubmit(event)} 
                disabled={value === ''}
                />
    }

    console.log(props.userId)

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
        isAuth: state.authReducer.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAddWorkoutType: (value, userId) => dispatch(actions.addWorkoutType(value, userId))
    }
  }

export default connect(mapStatetoProps, mapDispatchToProps)(AddWorkoutForm)
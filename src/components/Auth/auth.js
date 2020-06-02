import React, { useState } from 'react'
import { connect } from 'react-redux'

import * as actions from '../.././store/actions/index'
import TextBox from '../UI/Textbox/Textbox'

const Auth = props => {

    const [state, setState] = useState({email: '', password: ''})
    const [signup, setSignup] =useState(true)

    const change = (event) => {
        var {name, value} = event.target
        setState({...state, [name]: value})
    }

    const submit = event => {
        event.preventDefault()
        console.log("submitted")
        var authData = {
            ...state
        }
        props.onSubmit(authData, signup)
    }

    const toggle = () => {
        setSignup(!signup)
    }
    console.log(state)

    return (
        <form onSubmit={event => submit(event)}>
            <input type="email" required placeholder="Email" name="email" value={state.email} onChange={event => change(event)} />
            <input type="password" required minLength={4} placeholder="password" name="password" onChange={event => change(event)} value={state.password} />
            <button type="submit" >SUBMIT</button>
            <h3 onClick={toggle}>Switch To {signup ? 'Signin' : 'Signup' } </h3>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        error: state.authReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (authData, signup) => dispatch(actions.auth(authData, signup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
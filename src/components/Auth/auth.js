import React, { useState } from 'react'
import { connect } from 'react-redux'

import Auxillary from '../../hoc/Auxillary/Auxillary'
import * as actions from '../.././store/actions/index'
import Spinner from '../UI/Spinner/Spinner'
import TextBox from '../UI/Textbox/Textbox'
// import Button from '../UI/Button/Button'
import classes from './auth.css'
import { Button } from '@material-ui/core'

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
    if(props.isAuth){
        props.history.push({
            pathname: '/'
        })
    }

    let form = <Spinner />
    if(!props.loading){
        form = (
            <Auxillary>
                {signup ? <h3>Signup</h3> : <h3>Signin</h3>}
                <TextBox showIcon={false} type="email" required placeholder="Email" name="email" value={state.email} onChange={event => change(event)} />
                <TextBox showIcon={false} type="password" required minLength={4} placeholder="password" name="password"  onChange={event => change(event)} value={state.password} />
                <Button type="submit" variant="contained" size="small" >Submit</Button>
                <h5 onClick={toggle}>Switch To {signup ? 'Signin' : 'Signup' } </h5>
            </Auxillary>
        )
    }

    return (
        <form className={classes.AuthForm} onSubmit={event => submit(event)}>
            {form}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        isAuth: state.authReducer.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (authData, signup) => dispatch(actions.auth(authData, signup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
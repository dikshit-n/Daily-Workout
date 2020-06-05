import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index'

const Logout = props => {

    const { onLogout } = props

    useEffect(() => {
        console.log("called logout")
        onLogout()
    }, [onLogout])

    useEffect(() => {
        return () => console.log("Logout Unmounted")
    }, [])

    return <Redirect to='/' />
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
import React from 'react'
import axios from 'axios'

import Auxilalry from '../../hoc/Auxillary/Auxillary'
import WorkoutTypes from './WorkoutTypes/WorkoutTypes'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const HomePage = props => {
    return(
        <Auxilalry>
            <WorkoutTypes />
        </Auxilalry>
    )
}

export default withErrorHandler(HomePage, axios)
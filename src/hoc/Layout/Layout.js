import React from 'react';
import SwipeViews from 'react-swipeable-views';

import Aux from '../Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../../components/HomePage/Toolbar/Toolbar';

const Layout = props => {
        return (
            <Aux>
                <Toolbar />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )
}

export default Layout;
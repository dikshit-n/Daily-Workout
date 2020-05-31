import React, { Component } from 'react';

import Aux from '../Auxillary/Auxillary';
import classes from './Layout.css';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <header className={classes.header} >

                </header>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
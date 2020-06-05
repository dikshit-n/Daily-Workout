import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    props.to !== null ? <li className={classes.NavigationItem}>
        <NavLink 
            to={props.to}
            exact={props.exact}
            activeClassName={classes.active}><h4>{props.children}</h4></NavLink>
    </li> : null
);

export default navigationItem;
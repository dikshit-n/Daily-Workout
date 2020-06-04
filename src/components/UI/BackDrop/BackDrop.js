import React from 'react';
import { Transition } from 'react-transition-group';

import classes from './BackDrop.css';

const animationTime = {
    enter: 1000,
    exit: 1000
}

const BackDrop = (props) => (
    <Transition in = {props.show} timeout={animationTime} mountOnEnter unmountOnExit >
        {
            state => {
                const attacehdClasses = [classes.Backdrop, state === 'entering' ? classes.BackdropOpen : state === "exiting" ? classes.BackdropClose : null]
                return (
                    <div className={attacehdClasses.join(' ')} onClick={props.onClick} ></div>
                )
            }
        }
    </Transition>  
);

export default BackDrop;
import React, { memo } from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import BackDrop from '../BackDrop/BackDrop';

const animationTime = {
    enter: 1000,
    exit: 1000
}

const Modal = props => {
    return (
        <Aux>
            <BackDrop show={props.show} onClick={props.onClick} />
            <CSSTransition in={props.show} timeout={animationTime} mountOnEnter unmountOnExit
                classNames={{
                    enter:'',
                    enterActive: classes.ModalOpen,
                    exit: "",
                    exitActive: classes.ModalClose,
                    appear: '',
                    appearActive:''
                }}>
                <div className={classes.Modal}>
                    {props.children}
                </div>
            </CSSTransition>
        </Aux>
    )
}

export default memo(Modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children)
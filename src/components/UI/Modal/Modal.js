import React, { memo } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import BackDrop from '../BackDrop/BackDrop';


const Modal = props => {
    return (
        <Aux>
            <BackDrop show={props.show} onClick={props.onClick} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default memo(Modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children)
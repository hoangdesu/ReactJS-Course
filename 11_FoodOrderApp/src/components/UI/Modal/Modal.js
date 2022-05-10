import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ toggleCartOverlay }) => (
    <div className={classes.backdrop} onClick={toggleCartOverlay} />
);

const Overlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

const overlayDiv = document.querySelector('#overlays');

const Modal = ({ children, toggleCartOverlay }) => {
    return (
        <>
            {/* <Backdrop />
            <Overlay>{props.children}</Overlay> */}
            {/* The above could be use, but it will make HTML all over the places. */}
            {/* Better solution: use portal */}

            {ReactDOM.createPortal(
                <Backdrop toggleCartOverlay={toggleCartOverlay} />,
                overlayDiv
            )}
            {ReactDOM.createPortal(<Overlay>{children}</Overlay>, overlayDiv)}
        </>
    );
};

export default Modal;

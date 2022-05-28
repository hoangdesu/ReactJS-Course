import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import CartContext from '../../../store/cart-context';

const Backdrop = () => {
    const cartCtx = useContext(CartContext);
    return (
        <div className={classes.backdrop} onClick={cartCtx.toggleCartOverlay} />
    );
};

const Overlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

const overlayDiv = document.querySelector('#overlays');

const Modal = ({ children }) => {
    return (
        <>
            {/* <Backdrop />
            <Overlay>{props.children}</Overlay> */}
            {/* The above could be use, but it will make HTML all over the places. */}
            {/* Better solution: use portal */}

            {ReactDOM.createPortal(
                <Backdrop />,
                overlayDiv
            )}
            {ReactDOM.createPortal(<Overlay>{children}</Overlay>, overlayDiv)}
        </>
    );
};

export default Modal;

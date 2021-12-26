import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const BackDrop = (props) => (
    <div className={classes.backdrop} onClick={props.onConfirm} />
);

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <BackDrop
                    className={props.className}
                    onConfirm={props.onConfirm}
                />,
                document.querySelector('#backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.querySelector('#overlay-root')
            )}
        </>
    );
};

export default ErrorModal;

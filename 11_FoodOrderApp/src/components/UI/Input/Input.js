import React, { forwardRef } from 'react';
import classes from './Input.module.css';
import propTypes from 'prop-types';

const Input = forwardRef(({ label, id, configs }, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...configs} ref={ref}></input>
        </div>
    );
});

Input.propType = {
    label: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    configs: propTypes.object.isRequired
};

export default Input;

import React from 'react';
import classes from './Input.module.css';
import propTypes from 'prop-types';

const Input = ({ label, id, configs }) => {
    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...configs}></input>
        </div>
    );
};

Input.propType = {
    label: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    configs: propTypes.object.isRequired
};

export default Input;

import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import ClearButton from '../../UI/Button/ClearButton';
import './CourseInput.css';


const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) setIsValid(true);
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue('');
        setIsValid(true);
    };

    const onClearHandler = () => {
        setEnteredValue('');
        setIsValid(true);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${isValid ? '' : 'invalid'}`}>
                <label>
                    Course Goal
                </label>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <div style={{ width:'100%', display: 'flex', flexDirection:'row', justifyContent: 'space-between' }}>
            <Button type="submit">Add Goal</Button>
            <ClearButton type="button" onClick={onClearHandler} >Clear</ClearButton>
            </div>
        </form>
    );
};

export default CourseInput;

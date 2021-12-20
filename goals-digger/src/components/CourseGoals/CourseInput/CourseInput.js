import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
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

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${isValid ? 'valid' : 'invalid'}`}>
                <label style={{ color: isValid ? '' : 'red' }}>
                    Course Goal
                </label>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                    style={{
                        backgroundColor: isValid ? 'transparent' : 'salmon',
                        border: isValid ? '' : 'red',
                    }}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;

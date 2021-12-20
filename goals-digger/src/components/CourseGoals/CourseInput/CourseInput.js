import React, { useState } from 'react';
import styled from 'styled-components';
import AnotherButton from '../../UI/Button/AnotherButton';

import Button from '../../UI/Button/Button';
import ClearButton from '../../UI/Button/ClearButton';
import './CourseInput.css';

const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => !props.valid && 'red'};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.valid ? '#ccc' : 'red')};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
        background: ${(props) => !props.valid && 'salmon'};
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }

    //   &.invalid label {
    //     color: red;
    //   }

    //   &.invalid input {
    //     background-color: salmon;
    //     border: red;
    //   }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

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
            {/* <div className={`form-control ${isValid ? '' : 'invalid'}`}> */}
            {/* <FormControl className={!isValid && 'invalid'}> {/* 1st way: adding class */}
            <FormControl valid={isValid}>
                <label>Course Goal</label>
                <AnotherButton type="button" onClick={() => alert('sup!')}>
                    hi!
                </AnotherButton>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                />
            </FormControl>
            {/* </div> */}
            <ButtonGroup>
                <Button type="submit">Add Goal</Button>
                <ClearButton type="button" onClick={onClearHandler}>
                    Clear
                </ClearButton>
            </ButtonGroup>
        </form>
    );
};

export default CourseInput;

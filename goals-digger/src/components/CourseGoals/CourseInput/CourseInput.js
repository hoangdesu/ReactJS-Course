import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import ClearButton from '../../UI/Button/ClearButton';
import './CourseInput.css';

const FormControl = styled.div`

    margin: 0.5rem 0;
  }
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  
  &.invalid label {
    color: red;
  }
  
  &.invalid input {
    background-color: salmon;
    border: red;
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
            <FormControl>
                <label>
                    Course Goal
                </label>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                />
                </FormControl>
            {/* </div> */}
            <div style={{ width:'100%', display: 'flex', flexDirection:'row', justifyContent: 'space-between' }}>
                <Button type="submit">Add Goal</Button>
                <ClearButton type="button" onClick={onClearHandler} >Clear</ClearButton>
            </div>
        </form>
    );
};

export default CourseInput;

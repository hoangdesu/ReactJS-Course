import React, { useState } from 'react';

const Form = (props) => {
    const [userInput, setUserInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const addGoalHandler = (evt) => {
        evt.preventDefault();
        setIsValid(true);
        if (userInput.trim().length !== 0) {
            props.setGoals((prev) => {
                return [...prev, userInput];
            });
        } else {
            setIsValid(false)
        }
        setUserInput(''); // reset input
    };

    // storing input value to a state for 2 way binding
    const inputHandler = (evt) => {
        setUserInput(evt.target.value);
    };

    return (
        <div>
            <p>Goals digger</p>
            <form>
                <input type="text" onChange={inputHandler} value={userInput} />
                <button onClick={addGoalHandler}>Add Goal</button>
                {isValid ? '' : <p style={{ color: 'red' }}>Input empty</p> }
            </form>
        </div>
    );
};

export default Form;

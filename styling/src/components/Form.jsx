import React, { useState } from 'react';

const Form = (props) => {
    const [userInput, setUserInput] = useState('');

    const addGoalHandler = (evt) => {
        evt.preventDefault();
        props.setGoals((prev) => {
            return [...prev, userInput];
        });
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
            </form>
        </div>
    );
};

export default Form;

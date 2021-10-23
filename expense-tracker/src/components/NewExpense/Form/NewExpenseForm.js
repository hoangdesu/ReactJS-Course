import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = () => {
    // // ----- multiple states approach -----
    // const [inputItem, setInputItem] = useState('');
    // const [inputPrice, setInputPrice] = useState('');
    // const [inputDate, setInputDate] = useState('');

    // // state change handlers
    // const changeItemHandler = (evt) => {
    //     setInputItem(evt.target.value);
    // };

    // const changePriceHandler = (evt) => {
    //     setInputPrice(evt.target.value);
    // };

    // const changeDateHandler = (evt) => {
    //     setInputDate(evt.target.value);
    // };


    // ----- one useState Hook approach ------
    const [userInput, setUserInput] = useState({
        inputItem: '',
        inputPrice: '',
        inputDate: '',
    });

    const changeItemHandler = (evt) => {
        // setUserInput({
        //     ...userInput,
        //     inputItem: evt.target.value,
        // });

        // function form for previous state
        setUserInput((prevState) => {
            return {
                ...prevState,
                inputItem: evt.target.value
            };
        });
    };

    const changePriceHandler = (evt) => {
        // setUserInput({
        //     ...userInput,
        //     inputPrice: evt.target.value,
        // });
        
        // function form for previous state
        setUserInput((prevState) => {
            return {
                ...prevState,
                inputPrice: evt.target.value
            };
        });
    };

    const changeDateHandler = (evt) => {
        // setUserInput({
        //     ...userInput,
        //     inputDate: evt.target.value,
        // });

        // function form for previous state
        setUserInput((prevState) => {
            return {
                ...prevState,
                inputDate: evt.target.value
            };
        });
    };

    // JSX
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Item</label>
                    <input type="text" onChange={changeItemHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        onChange={changePriceHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2022-12-31"
                        onChange={changeDateHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;

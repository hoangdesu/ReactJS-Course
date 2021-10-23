import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
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


    // --- Form handler ---
    const formSubmitHandler = (event) => {
        // prevent form submission
        event.preventDefault();
        
        // collecting data
        const expenseData = {
            item: userInput['inputItem'], // either notation works
            price: userInput.inputPrice, // either notation works
            date: new Date(userInput['inputDate'])
        }

        // send data up from Form to NewExpense
        props.onFormSubmitToNewExpense(expenseData);

        // 2-way binding, resetting input values
        setUserInput({
            inputItem: '',
            inputPrice: '',
            inputDate: '',
        })
    };


    // JSX
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Item</label>
                    <input 
                        type="text" 
                        onChange={changeItemHandler} 
                        value={userInput.inputItem} // resetting input
                        // required 
                        />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        onChange={changePriceHandler}
                        value={userInput.inputPrice} // resetting input
                        // required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2022-12-31"
                        onChange={changeDateHandler}
                        value={userInput.inputDate} // resetting input
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

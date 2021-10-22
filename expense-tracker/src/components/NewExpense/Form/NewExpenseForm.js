import React from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = () => {

    const changeItemHandler = (evt) => {
        console.log(evt.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Item</label>
                    <input type="text" onChange={changeItemHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="1" step="1" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;

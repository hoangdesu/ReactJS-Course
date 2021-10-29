import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    // on select change handler
    const yearChangeHandler = (event) => {
        // lifting state up to Expenses component
        props.onYearChange(event.target.value);
    };
    
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={yearChangeHandler} defaultValue={props.selected}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="all">Show all</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;

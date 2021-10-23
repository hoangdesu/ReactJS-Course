import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    // useState Hook
    const [selectedYear, setSelectedYear] = useState('');

    // on select change handler
    const onYearChangeHandler = (event) => {
        setSelectedYear(event.target.value);

         // this one is good but overkilled!
        // setYear(prevState => {
        //     console.log(event.target.value);
        //     return event.target.value;
        // });

    };
    
    // lifting state up to Expenses component
    props.onYearChange(selectedYear);
    console.log('Year from Filter:', selectedYear); // yup it's working!

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={onYearChangeHandler} defaultValue={"2021"}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;

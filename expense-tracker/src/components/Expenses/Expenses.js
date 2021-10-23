import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './Item/ExpenseItem';
import Card from '../Card/Card';
import ExpenseFilter from './Filter/ExpenseFilter';

const Expenses = (props) => {
    // local variables
    let year = 0;

    // event handler
    const yearChangeHandler = (receivedYear) => {
        console.log('Year from Expenses:', receivedYear);
        year = receivedYear;
    };

    // Hook
    const [selectedYear, setSelectedYear] = useState(year);
    console.log("Local Year:", selectedYear);

    return (
        <div>
            <ExpenseFilter onYearChange={yearChangeHandler} />
            <Card className="expenses">
                <ExpenseItem props={props.expenses[0]} />
                <ExpenseItem props={props.expenses[1]} />
                <ExpenseItem props={props.expenses[2]} />
                <ExpenseItem props={props.expenses[3]} />
            </Card>
        </div>
    );
};

export default Expenses;

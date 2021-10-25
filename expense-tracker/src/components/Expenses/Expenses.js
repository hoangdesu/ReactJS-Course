import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './Item/ExpenseItem';
import Card from '../Card/Card';
import ExpenseFilter from './Filter/ExpenseFilter';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    // event handler for getting data from Filter
    const yearChangeHandler = (receivedYear) => {
        setSelectedYear(receivedYear);
    };

    console.log('Selected year:', selectedYear);

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={selectedYear}
                    onYearChange={yearChangeHandler}
                />
                {props.expenses.map((expense) => {
                    return <ExpenseItem props={expense} />;
                })}

                {/* similar to this */}
                {/* {[<ExpenseItem props={props.expenses[0]} />,
                <ExpenseItem props={props.expenses[1]} />,
                <ExpenseItem props={props.expenses[2]} />,
                <ExpenseItem props={props.expenses[3]} />]} */}
            </Card>
        </div>
    );
};

export default Expenses;

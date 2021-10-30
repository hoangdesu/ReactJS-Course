import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from '../Item/ExpenseItem';
import Card from '../Card/Card';
import ExpenseFilter from '../Filter/ExpenseFilter';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('all');
    let filteredList = [];

    // event handler for getting data from Filter
    const yearChangeHandler = (receivedYear) => {
        setSelectedYear(receivedYear);
    };

    if (selectedYear === 'all') {
        filteredList = props.expenses;
    } else {
        filteredList = props.expenses.filter(
            (expense) => expense.date.getFullYear() === parseInt(selectedYear)
        );
    }

    // store JSX content in a variable to make the code cleaner
    const expensesContent = filteredList.map(expense => <ExpenseItem key={expense.id} expense={expense} />);
    const expensesCount = filteredList.length === 0 ? <p>No expenses found.</p> : <p>Total: {filteredList.length} {(filteredList.length === 1 ? 'item' : 'items')}</p>; // not the cleanest but it looks cool =))

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={selectedYear}
                    onYearChange={yearChangeHandler}
                />

                {/* {filteredList = props.expenses.filter(
                (expense) => expense.date.getFullYear() === parseInt(selectedYear))} */}

                {/* above is similar to this */}
                {/* {[<ExpenseItem props={props.expenses[0]} />,
                <ExpenseItem props={props.expenses[1]} />,
                <ExpenseItem props={props.expenses[2]} />,
                <ExpenseItem props={props.expenses[3]} />]} */}

                {/* --- inline tenary condition--- */}
                {/* {filteredList.length === 0 ? (
                    <p>No expenses found</p>
                ) : (
                    <p>
                        Total: {filteredList.length}{' '}
                        {filteredList.length === 1 ? 'expense' : 'expenses'}
                    </p>
                )} */}

                {/* --- using the && operator trick --- */}
                {/* {filteredList.length === 0 && <p>No expenses found</p>}
                {filteredList.length > 0 && (
                    <p>
                        Total: {filteredList.length}{' '}
                        {filteredList.length === 1 ? 'expense' : 'expenses'}
                    </p>
                )} */}

                {/* Separate the logics from UI */}
                {expensesContent}
                {expensesCount}
            </Card>
        </div>
    );
};

export default Expenses;

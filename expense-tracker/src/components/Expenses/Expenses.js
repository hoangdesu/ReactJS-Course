import React, { useState } from 'react';

import './Expenses.css';
import Card from '../Card/Card';
import ExpenseFilter from '../Filter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';

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
    // const expensesContent = filteredList.map(expense => <ExpenseItem key={expense.id} expense={expense} />);
    // const expensesCount = filteredList.length === 0 ? <p>No expenses found.</p> : <p>Total: {filteredList.length} {(filteredList.length === 1 ? 'item' : 'items')}</p>; // not the cleanest but it looks cool =))
    
    let unit = filteredList.length === 1 ? 'item' : 'items';

    const expensesCount = <p>Total: {filteredList.length} {unit}</p>

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={selectedYear}
                    onYearChange={yearChangeHandler}
                />

                {/* 64. --- rendering list dynamically with map --- */}
                {/* {filteredList = props.expenses.filter(
                (expense) => expense.date.getFullYear() === parseInt(selectedYear))} */}

                {/* 64. --- above is similar to this---  */}
                {/* {[<ExpenseItem props={props.expenses[0]} />,
                <ExpenseItem props={props.expenses[1]} />,
                <ExpenseItem props={props.expenses[2]} />,
                <ExpenseItem props={props.expenses[3]} />]} */}

                {/* 67. --- inline tenary condition--- */}
                {/* {filteredList.length === 0 ? (
                    <p>No expenses found</p>
                ) : (
                    <p>
                        Total: {filteredList.length}{' '}
                        {filteredList.length === 1 ? 'expense' : 'expenses'}
                    </p>
                )} */}

                {/* 67. --- using the && operator trick --- */}
                {/* {filteredList.length === 0 && <p>No expenses found</p>}
                {filteredList.length > 0 && (
                    <p>
                        Total: {filteredList.length}{' '}
                        {filteredList.length === 1 ? 'expense' : 'expenses'}
                    </p>
                )} */}

                {/* 67. Separate the logics from UI */}
                {/* {expensesContent}
                {expensesCount} */}

                {/* 68. adding conditional return */}
                <ExpensesList filteredList={filteredList} />
                {filteredList.length > 0 && expensesCount}
            </Card>
        </div>
    );
};

export default Expenses;

import React from 'react';

import './ExpensesList.css';
import ExpenseItem from '../Item/ExpenseItem';

const ExpensesList = (props) => {
    if (props.filteredList.length === 0) {
        return <h3 className="expense-list__notFound">{'No expenses found'}</h3>;
    } 

    return (
        <ul className="expense-list">
            {props.filteredList.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </ul>
    );
};

export default ExpensesList;

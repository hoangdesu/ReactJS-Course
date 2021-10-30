import React from 'react';

import ExpenseItem from '../Item/ExpenseItem';
import './ExpensesList.css';

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

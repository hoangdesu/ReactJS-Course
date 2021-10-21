import React from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem props={props.expenses[0]} />
            <ExpenseItem props={props.expenses[1]} />
            <ExpenseItem props={props.expenses[2]} />
            <ExpenseItem props={props.expenses[3]} />
        </Card>
    );  
}

export default Expenses;
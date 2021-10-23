import React from 'react';

import './NewExpense.css';
import NewExpenseForm from './Form/NewExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (receivedExpenseData) => {
        // const expenseData = {
        //     ...receivedExpenseData
        // }
        props.onNewExpenseSubmitToApp(receivedExpenseData);
    }

    return (
        <div className="new-expense">
            <NewExpenseForm onFormSubmitToNewExpense={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;

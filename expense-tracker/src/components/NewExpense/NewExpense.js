import React, { useState } from 'react';

import './NewExpense.css';
import NewExpenseForm from '../Form/NewExpenseForm';

const NewExpense = (props) => {
    const [formOpened, setFormOpened] = useState(false);
    let content;

    const saveExpenseDataHandler = (receivedExpenseData) => {
        // const expenseData = {
        //     ...receivedExpenseData
        // }
        props.onNewExpenseSubmitToApp(receivedExpenseData);
        setFormOpened(false);
    }
    
    // --- Asm4. handler to toggle between form and add new button
    const addExpenseHandler = () => {
        // if (!formOpened) setFormOpened(true);
        // else setFormOpened(false);
        formOpened ? setFormOpened(false) : setFormOpened(true); // cleaner :>
    }

    if (!formOpened) {       
        content = <button onClick={addExpenseHandler}>Add New Expense</button>;
    } else {
        content = <NewExpenseForm onFormSubmitToNewExpense={saveExpenseDataHandler} setFormOpened={setFormOpened} />
    }

    return (
        <div className="new-expense">
            {content}
        </div>
    );
};

export default NewExpense;

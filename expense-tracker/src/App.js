import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Curnon watch',
            price: 3000000,
            date: new Date(2021, 1, 26),
        },
        {
            id: 'e2',
            title: 'Keychron K2',
            price: 5500000,
            date: new Date(2020, 11, 15),
        },
        {
            id: 'e3',
            title: 'Delux mouse',
            price: 250000,
            date: new Date(2021, 6, 10),
        },
        {
            id: 'e1',
            title: 'AirPods 2',
            price: 5000000,
            date: new Date(2021, 5, 30),
        },
    ];

    // --- Event handlers ---
    // receive data from NewExpense handler
    const saveNewExpenseDataHandler = (receivedExpenseDataFromNewExpense) => {
        // console.log('Data from App: ');
        // console.log(receivedExpenseDataFromNewExpense);
        const expenseData = {
            ...receivedExpenseDataFromNewExpense,
            id: Date.now() // using epoch time as id
        }
        console.log(expenseData);
    };



    // modern JSX
    return (
        <div>
            <h2 align="center">Expense Tracker</h2>
            <NewExpense onNewExpenseSubmitToApp={saveNewExpenseDataHandler} />
            <Expenses expenses={expenses} />
        </div>
    );

    // ----- alternative way: behind the scence, old way that return the same JSX from above
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h1', {}, 'Expense Tracker using createElement'),
    //     React.createElement(Expenses, { expenses: expenses })
    // );
}

export default App;

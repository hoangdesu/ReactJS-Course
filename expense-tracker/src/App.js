import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Footer from './components/Footer/Footer';

const INITIAL_LIST = [
    {
        id: 'e1',
        item: 'Curnon watch',
        price: 3000000,
        date: new Date(2021, 1, 26),
    },
    {
        id: 'e2',
        item: 'Keychron K2',
        price: 5500000,
        date: new Date(2020, 11, 15),
    },
    {
        id: 'e3',
        item: 'Delux mouse',
        price: 250000,
        date: new Date(2021, 6, 10),
    },
    {
        id: 'e1',
        item: 'AirPods 2',
        price: 5000000,
        date: new Date(2021, 5, 30),
    },
];

const App = () => {
    const [expenseList, setExpenseList] = useState(INITIAL_LIST);

    // --- Event handlers ---
    // receive data from <NewExpense />
    const saveNewExpenseDataHandler = (receivedExpenseDataFromNewExpense) => {

        const expenseData = {
            ...receivedExpenseDataFromNewExpense,
            id: Date.now() // using epoch time as id
        }
        
        setExpenseList((prevExpenseList) => {
            return [expenseData, ...prevExpenseList]
        })
    };
    
    console.log(expenseList);
    
    // modern JSX
    return (
        <div>
            <h2 align="center">Expense Tracker</h2>
            <NewExpense onNewExpenseSubmitToApp={saveNewExpenseDataHandler} />
            <Expenses expenses={expenseList} />
            <Footer />
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
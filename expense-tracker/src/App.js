import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Footer from './components/Footer/Footer';

const INITIAL_LIST = [
    {
        id: 'e1',
        item: 'Curnon watch',
        price: 3000000,
        date: new Date(2021, 1, 26)
    },
    {
        id: 'e2',
        item: 'Keychron K2',
        price: 5500000,
        date: new Date(2020, 11, 15)
    },
    {
        id: 'e3',
        item: 'Delux mouse',
        price: 250000,
        date: new Date(2021, 6, 10)
    },
    {
        id: 'e4',
        item: 'Razer Blackwidow',
        price: 3450000,
        date: new Date(2019, 7, 15)
    },
    {
        id: 'e5',
        item: 'AirPods 2',
        price: 5000000,
        date: new Date(2021, 5, 30)
    },
    {
        id: 'e6',
        item: 'Razer DeathAdder',
        price: 2790000,
        date: new Date(2019, 8, 9)
    },
    {
        id: 'e7',
        item: 'Macbook Pro 2015',
        price: 15000000,
        date: new Date(2020, 9, 9)
    },
    {
        id: 'e8',
        item: 'iPhone 6 Plus',
        price: 3200000,
        date: new Date(2020, 4, 12)
    }
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
            {/* <Chart /> */}
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
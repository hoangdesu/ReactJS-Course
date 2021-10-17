import ExpenseItem from './components/ExpenseItem';

function App() {
    // const birthday = new Date(2021, 1, 27); // = 2021-02-26 :D?
    // const expenseTitle = 'Curnon watch';
    // const price = 3000000;
    // const formattedPrice = price.toLocaleString('vi-VI', {style: 'currency', currency: 'VND'});

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
            title: 'Airpods 2',
            price: 5000000,
            date: new Date(2021, 5, 30),
        },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            {/* <p>Finally learning React yayy</p> */}
            
            <ExpenseItem 
                title={expenses[0]['title']}
                price={expenses[0].price}
                date={expenses[0].date}
            /> {/* self-closing is preferred */}
            <ExpenseItem
                title={expenses[1]['title']}
                price={expenses[1].price}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2]['title']}
                price={expenses[2].price}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3]['title']}
                price={expenses[3].price}
                date={expenses[3].date}
            />
            
            {/* <ExpenseItem></ExpenseItem> */}
        </div>
    );
}

export default App;

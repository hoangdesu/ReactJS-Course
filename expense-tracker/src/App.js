import Expenses from './components/Expenses';

function App() {
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
            title: 'AirPods Pro',
            price: 5000000,
            date: new Date(2021, 5, 30),
        },
    ];

    return (
        <div>
            <h2>Expense Tracker</h2>
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;

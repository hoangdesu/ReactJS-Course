import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenseItem props={props.expenses[0]} />
            <ExpenseItem props={props.expenses[1]} />
            <ExpenseItem props={props.expenses[2]} />
            <ExpenseItem props={props.expenses[3]} />
        </div>
    );  
}

export default Expenses;
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ props }) {

    // convert to VND
    const price = props.price.toLocaleString('vi-VI', {style: 'currency', currency: 'VND'});

    return (
        <div className="expense-item">
            <ExpenseDate props={props} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;

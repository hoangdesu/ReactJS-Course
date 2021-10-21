import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem({ props }) {

    // convert to VND
    const price = props.price.toLocaleString('vi-VI', {style: 'currency', currency: 'VND'});

    return (
        <Card className="expense-item">
            <ExpenseDate props={props} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;

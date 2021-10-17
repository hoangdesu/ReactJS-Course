import './ExpenseItem.css';

function ExpenseItem(props) {
    // const birthday = new Date(2021, 1, 27); // = 2021-02-26 :D?
    // const expenseTitle = 'Curnon watch';
    // const price = 3000000;
    // const formattedPrice = price.toLocaleString('vi-VI', {style: 'currency', currency: 'VND'});

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;

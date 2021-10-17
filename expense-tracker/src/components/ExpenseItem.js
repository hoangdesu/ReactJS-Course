import './ExpenseItem.css';

function ExpenseItem() {
    const birthday = new Date(2021, 1, 27); // = 2021-02-26 :D? 
    const expenseTitle = 'Curnon watch';
    const price = 3000000;
    const formattedPrice = price.toLocaleString('vi-VI', {style: 'currency', currency: 'VND'});

    return (
        <div className="expense-item">
            <div>{birthday.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{formattedPrice}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;

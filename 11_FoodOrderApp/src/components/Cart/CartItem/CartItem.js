import classes from './CartItem.module.css';

const CartItem = ({ item, onAdd, onRemove }) => {
    const { name, price, amount } = item;

    const formattedPrice = `${new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price * 22000)}`;

    const formattedAmount = `${new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price * amount * 22000)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{formattedPrice}</span>
                    <span className={classes.amount}>x {amount}</span>
                </div>
            </div>
            <div>
                <div className={classes.actions}>
                    <button onClick={onRemove}>−</button>
                    <button onClick={onAdd}>+</button>
                </div>
                <div className={classes.sumItems}>{formattedAmount}</div>
            </div>
        </li>
    );
};

export default CartItem;

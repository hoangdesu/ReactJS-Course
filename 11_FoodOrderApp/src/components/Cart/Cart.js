import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const DUMMY_ITEMS = [
    {
        id: '1',
        name: 'sushi',
        amount: 2,
        price: 69.99
    },
    {
        id: '2',
        name: 'ramen',
        amount: 2,
        price: 59.99
    },
];

const Cart = () => {
    const cartCtx = useContext(CartContext);

    const cartItems = DUMMY_ITEMS.map((item) => <li>{item.name}</li>);

    return (
        <Modal>
            <ul className={classes['cart-items']}>{cartItems}</ul>
            <div className={classes['total']}>
                <span>Total amount</span>
                <span>69.99</span>
            </div>
            <div className={classes['actions']}>
                <button className={classes['button--alt']} onClick={cartCtx.toggleCartOverlay}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;

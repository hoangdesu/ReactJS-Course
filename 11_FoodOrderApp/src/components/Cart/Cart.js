import React from 'react';
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
        id: '1',
        name: 'ramen',
        amount: 2,
        price: 69.99
    },
];

const Cart = ({ toggleCartOverlay }) => {
    const cartItems = DUMMY_ITEMS.map((item) => <li>{item.name}</li>);

    return (
        <Modal toggleCartOverlay={toggleCartOverlay}>
            <ul className={classes['cart-items']}>{cartItems}</ul>
            <div className={classes['total']}>
                <span>Total amount</span>
                <span>69.99</span>
            </div>
            <div className={classes['actions']}>
                <button className={classes['button--alt']} onClick={toggleCartOverlay} >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
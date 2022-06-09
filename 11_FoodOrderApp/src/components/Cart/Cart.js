import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import emptyCart from '../../assets/emptyCart.jpeg';

import classes from './Cart.module.css';

const Cart = () => {
    const cartCtx = useContext(CartContext);

    const addItemToCartHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const removeItemFromCartHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const formattedTotalAmount = `${new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(cartCtx.totalAmount * 22000)}`;

    const cartItems = cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            item={item}
            onAdd={() => addItemToCartHandler(item)}
            onRemove={removeItemFromCartHandler.bind(null, item.id)} // .bind() -> same as above
        />
    ));
    console.log('total amount', cartCtx.totalAmount);

    return (
        <Modal>
            {cartCtx.items.length === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    <h1>Your cart is empty</h1>
                    <img src={emptyCart} alt="empty cart" width="50%" />
                </div>
            ) : (
                <>
                    <h1>Your orders</h1>
                    <ul className={classes['cart-items']}>{cartItems}</ul>
                    <div className={classes['total']}>
                        <span>Total amount</span>
                        <span>{formattedTotalAmount}</span>
                    </div>
                </>
            )}

            <div className={classes['actions']}>
                <button
                    className={classes['button--alt']}
                    onClick={cartCtx.toggleCartOverlay}
                >
                    Close
                </button>
                {cartCtx.items.length > 0 && (
                    <button className={classes.button}>Order</button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;

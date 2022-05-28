import React, { useContext } from 'react';

import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext);
    
    const cartItemsNum = cartCtx.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0);

    // currentValue will get carried on every execution. 
    // Initially currentValue = 0

    return (
        <button className={classes.button} onClick={cartCtx.toggleCartOverlay}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemsNum}</span>
        </button>
        
    );
};

export default HeaderCartButton;

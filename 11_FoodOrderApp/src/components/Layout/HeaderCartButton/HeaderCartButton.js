import React, { useContext } from 'react';

import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ toggleCartOverlay }) => {
    const cartCtx = useContext(CartContext);

    return (
        <button className={classes.button} onClick={cartCtx.toggleCartOverlay}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartCtx.items.length}</span>
        </button>
        
    );
};

export default HeaderCartButton;

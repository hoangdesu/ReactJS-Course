import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext);
    const [btnClasses, setBtnClasses] = useState(classes.button); // my approach
    const [btnAnimated, setBtnAnimated] = useState(false); // video approach

    const cartItemsNum = cartCtx.items.reduce((currentValue, item) => {
        // console.log('currentValue: ', currentValue);
        // console.log('item amount:', item.amount);
        return currentValue + item.amount;
    }, 0);

    console.log('cartItemsNum:', cartItemsNum);

    // currentValue will get carried on every execution.
    // Initially currentValue = 0

    // video approach
    // const cartBtnClasses = `${classes.button} ${
    //     btnAnimated ? classes.bump : ''
    // }`;

    useEffect(() => {
        // my approach
        if (cartCtx.items.length === 0) return;

        // play the animation
        setBtnClasses(`${classes.button} ${classes.bump}`);

        // reset the animation
        const timer = setTimeout(() => {
            setBtnClasses(classes.button);
        }, 300);

        // clean up function
        // return () => {
        //     // clean the effect re-run when we clear the time out
        //     // somehow it stops the rapid animation :(
        //     clearTimeout(timer);
        // }


        // videos approach
        // if (cartCtx.items.length === 0) return;
        // setBtnAnimated(true);
        // setTimeout(() => {
        //     setBtnClass(classes.button);
        //     setBtnAnimated(false);
        // });
    }, [cartCtx.items]);

    return (
        <button className={btnClasses} onClick={cartCtx.toggleCartOverlay}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemsNum}</span>
        </button>
    );
};

export default HeaderCartButton;

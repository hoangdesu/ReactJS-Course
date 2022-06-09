import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import PropTypes from 'prop-types';

import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = ({ id, name, description, price }) => {
    const cartContext = useContext(CartContext);

    const formattedPrice = `${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price * 22000)}`;

    const addToCartHandler = amount => {
        cartContext.addItem({
            id: id,
            name: name,
            totalAmount: amount,
            price: price // price as number, not the formatted price (just for display)
        })
    };

    console.log('context items[]:', cartContext.items);

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

MealItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default MealItem;

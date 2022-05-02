import React from 'react';
import MealItemForm from './MealItemForm';
import PropTypes from 'prop-types';

import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
    const formattedPrice = `${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price * 22000)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} />
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

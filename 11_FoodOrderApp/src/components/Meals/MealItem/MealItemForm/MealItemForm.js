import React, { useContext } from 'react';
import Input from '../../../UI/Input';

import classes from './MealItemForm.module.css';
import CartContext from '../../../../store/cart-context';

const MealItemForm = ({ id }) => {
    const cartCtx = useContext(CartContext);
    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={classes.form} onSubmit={onFormSubmit}>
            <Input
                label="Amount"
                id={id}
                configs={{
                    type: 'number',
                    defaultValue: 0,
                    min: 1,
                    max: 10
                }}
            />
            <button onClick={cartCtx.addItem}>+ Add</button>
        </form>
    );
};

export default MealItemForm;

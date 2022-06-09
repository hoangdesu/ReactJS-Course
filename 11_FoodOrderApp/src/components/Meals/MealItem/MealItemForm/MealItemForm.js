import React, { useState, useRef } from 'react';
import Input from '../../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
    const inputRef = useRef(null);
    const [invalidAmount, setInvalidAmount] = useState(false);

    const onFormSubmit = (e) => {
        e.preventDefault();

        const amountValue = inputRef.current.value;
        const amountValueNum = +amountValue;

        // input validation. Stop executing if one of these conditions is met
        if (
            amountValue.trim().length === 0 ||
            amountValueNum < 1 ||
            amountValueNum > 10
        ) {
            setInvalidAmount(true);
            return;
        }

        onAddToCart(amountValueNum);
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
                ref={inputRef}
            />
            <button>+ Add</button>
            {invalidAmount && <p>Please enter a valid amount (1-10)</p>}
        </form>
    );
};

export default MealItemForm;

import React from 'react';
import Input from '../../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = ({ id }) => {
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
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;

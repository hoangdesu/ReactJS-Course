import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../Date/ExpenseDate';
import Card from '../../Card/Card';

function ExpenseItem({ props }) {
    
    // useState Hook
    const [title, setTitle] = useState(props.title);
    const [newPrice, setNewPrice] = useState(props.price);

    // event handlers
    const increaseClickHandler = () => {
        setNewPrice(props.price += 10000);
        console.log("Increase", newPrice);
    }
    
    const decreaseClickHandler = () => {
        setNewPrice(props.price -= 10000);
        console.log("Decrease", newPrice);
    }
    
    const itemClickHandler = () => {
        console.log("Clicked on", props.title);
    }
    
    const clickHanlder = () => {
        setTitle('Updated!!');
        console.log(title); // notice old value will get log, not updated value
    }
    
    // convert to VND
    const formattedPrice = newPrice.toLocaleString('vi-VI', {style: 'currency', currency: 'VND'});
    
    // JSX
    return (
        <Card className="expense-item">
            <ExpenseDate props={props} />
            <div onClick={itemClickHandler} className="expense-item__description">
                <h2>{title}</h2>
                <button onClick={clickHanlder}>Change title</button>
                <button className="btn" onClick={decreaseClickHandler}>-</button>
                <div className="expense-item__price">{formattedPrice}</div>
                <button className="btn" onClick={increaseClickHandler}>+</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;

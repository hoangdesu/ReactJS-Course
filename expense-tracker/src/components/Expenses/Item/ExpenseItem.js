import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../Item/Date/ExpenseDate';
import Card from '../../Card/Card';

// props object containing expense object
function ExpenseItem(props) {

    /**
     * ATTENTION!! → Child components (ExpenseItem), which get data from App, should NOT have their own useState. 
     * If they do, the data will have its OWN state inside the child components, resulting in data not getting 
     * rendered correctly. Child states will override parent state, making newly added expenses getting added 
     * to the expense list, but not displayed on screen property.
     */

    
    // useState Hook
    // const [item, setItem] = useState(props.expense.item);
    // const [newPrice, setNewPrice] = useState(props.expense.price);

    // // event handlers
    // const increaseClickHandler = () => {
    //     setNewPrice(props.expense.price += 10000);
    //     console.log("Increase", newPrice);
    // }
    
    // const decreaseClickHandler = () => {
    //     setNewPrice(props.expense.price -= 10000);
    //     console.log("Decrease", newPrice);
    // }
    
    const itemClickHandler = () => {
        console.log("Clicked on", props.expense.item, "- Price:", props.expense.price);
    }
    
    // const clickHanlder = () => {
    //     setItem('Updated!!');
    //     console.log(item); // notice old value will get log, not updated value
    // }
    
    // convert to VND
    const formattedPrice = props.expense.price.toLocaleString('vi-VI', {style: 'currency', currency: 'VND'});
    
    // JSX
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div onClick={itemClickHandler} className="expense-item__description">
                <h2>{props.expense.item}</h2>
                {/* <button className="btn" onClick={decreaseClickHandler}>-</button> */}
                <div className="expense-item__price">{formattedPrice}</div>
                {/* <button className="btn" onClick={increaseClickHandler}>+</button> */}
            </div>
        </Card>
    );
}

export default ExpenseItem;

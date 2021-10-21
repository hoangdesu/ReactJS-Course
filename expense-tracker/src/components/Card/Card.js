import React from 'react';

import './Card.css'

function Card(props) {
    const classes = `card ${props.className}`;
    return (
        <div className={classes}>
            {props.children}
            {/* {console.log(props.children)} */} 
            {/* children props is an object containing all elements wrapped around Card component */}
        </div>
    );
}

export default Card;
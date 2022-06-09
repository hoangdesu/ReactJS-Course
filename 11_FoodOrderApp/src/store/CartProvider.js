import React, { useState, useReducer } from 'react';

import CartContext from './cart-context';

const ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM'
};

// put outside to avoid component re-evaluation
const cartReducer = (state, action) => {
    if (action.type === ACTIONS.ADD_ITEM) {
        // state.items.push(action.item) -> can't use push: modify old state. Need new state: use concat()
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.totalAmount;

        // console.log('updatedTotalAmount', updatedTotalAmount);
        // console.log('state.totalAmount', state.totalAmount);
        // console.log('action.item.price', action.item.price);
        // console.log('action.item.totalAmount', action.item.totalAmount);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return initialCartState;
};

const initialCartState = {
    items: [],
    totalAmount: 0
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);
    const [cartOpen, setCartOpen] = useState(false);

    const addItemHandler = (item) => {
        dispatchCartAction({ type: ACTIONS.ADD_ITEM, item: item });
    };
    const removeItemHandler = (id) => {};

    const toggleCartOverlayHandler = () => {
        // console.log(cartOpen, 'cartOpen state provider');
        setCartOpen((cartOpen) => !cartOpen);
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        cartOpen: cartOpen,
        toggleCartOverlay: toggleCartOverlayHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

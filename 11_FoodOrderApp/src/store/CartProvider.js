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
        
        // need to check if items getting added is already inside array
        // my implementation, lecture also uses findIndex =)))
        // "great minds think alike" hehe xd!
        const duplicatedIndex = state.items.findIndex(item => item.id === action.item.id);
        // console.log(duplicatedItem);

        let updatedItems;
        if (duplicatedIndex === -1) { // no duplication
            // console.log('new item added');
            updatedItems = state.items.concat(action.item);
            // updatedItems = [...state.items, action.item]; // the same as concat
        } else {
            state.items[duplicatedIndex].amount += action.item.amount;

            // lecturer's approach, update the whole object :/:
            // const duplicatedItem = state.items[duplicatedIndex];
            // const updatedItem = {
            //     ...duplicatedItem,
            //     totalAmount: duplicatedItem.totalAmount + action.item.totalAmount
            // };
            // updatedItems = [...state.items];
            // updatedItems[duplicatedIndex] = updatedItem;

            updatedItems = [...state.items];
            console.log('duplicated:', duplicatedIndex, state.items);
        }

        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        // console.log('updatedTotalAmount', updatedTotalAmount);
        // console.log('state.totalAmount', state.totalAmount);
        // console.log('action.item.price', action.item.price);
        // console.log('action.item.totalAmount', action.item.totalAmount);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === ACTIONS.REMOVE_ITEM) {
        const currentItemIndex = state.items.findIndex(item => item.id === action.id);
        const currentItem = state.items[currentItemIndex];

        let updatedItemList;
        
        // if item's amount is 1, remove from the cart too
        if (currentItem.amount === 1) {
            updatedItemList = state.items.filter(item => item.id !== action.id);
        } else {
            updatedItemList = [...state.items];
            const updatedItem = {
                ...currentItem,
                amount: currentItem.amount - 1
            }
            updatedItemList[currentItemIndex] = updatedItem;
        }

        const updatedTotalAmount = state.totalAmount - currentItem.price;
        
        return {
            items: updatedItemList,
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
    const removeItemHandler = (id) => {
        dispatchCartAction({ type: ACTIONS.REMOVE_ITEM, id: id })
    };

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

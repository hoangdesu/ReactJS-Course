import React from 'react';

import CartContext from './cart-context';

const CartProvider = (props) => {

    const [cartOpen, setCartOpen] = React.useState(true);
    
    const addItemHandler = (item) => {};
    const removeItemHandler = (id) => {};

    const toggleCartOverlayHandler = () => {
        console.log(cartOpen);
        setCartOpen((cartOpen) => !cartOpen);
    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        cartOpen: cartOpen,
        toggleCartOverlay: toggleCartOverlayHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

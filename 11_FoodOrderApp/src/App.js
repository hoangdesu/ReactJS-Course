import React, { useState, useContext } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';
import CartContext from './store/cart-context';

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCartOverlay = () => {
        setCartOpen((cartOpen) => !cartOpen);
    };

    // --- switch to state manangement for cart using context
    // const cartCtx = useContext(CartContext);

    return (
        <CartProvider>
            {cartOpen && <Cart toggleCartOverlay={toggleCartOverlay} />}
            <Header toggleCartOverlay={toggleCartOverlay} />
            <Meals />

            {/* ^ old component using useState. Switched to context */}

            {/* toggle cart with context somehow doesn't work :/ */}
            {/* {console.log("APP: ", cartCtx.cartOpen)} */}
            {/* {cartCtx.cartOpen && <Cart />} */}

        </CartProvider>
    );
};

export default App;

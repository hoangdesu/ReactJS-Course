import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCartOverlay = () => {
        setCartOpen((cartOpen) => !cartOpen);
    };

    return (
        <>
            {cartOpen && <Cart toggleCartOverlay={toggleCartOverlay} />}
            <Header toggleCartOverlay={toggleCartOverlay} />
            <Meals />
        </>
    );
};

export default App;

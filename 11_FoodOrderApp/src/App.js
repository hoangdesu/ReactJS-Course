import React from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';

const App = () => {
    return (
        <>
            <Cart />
            <Header />
            <Meals />
        </>
    );
};

export default App;

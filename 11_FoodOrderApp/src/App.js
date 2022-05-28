import React, { useContext } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import CartContext from './store/cart-context';

const App = () => {
    // const [cartOpen, setCartOpen] = useState(false);

    // const toggleCartOverlay = () => {
    //     setCartOpen((cartOpen) => !cartOpen);
    // };

    // --- switch to state manangement for cart using context
    const cartCtx = useContext(CartContext);

    return (
        <>
            {cartCtx.cartOpen && <Cart />}
            <Header />
            <Meals />

            {/* ^ old component using useState. Switched to context */}

            {/* toggle cart with context somehow doesn't work :/ */}
            {/* {console.log("APP: ", cartCtx.cartOpen)} */}
            {/* {cartCtx.cartOpen && <Cart />} */}
        </>
    );
};

export default App;

import React, { useContext } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';
import CartContext from './store/cart-context';

const App = () => {
    // const [cartOpen, setCartOpen] = useState(false);

    // const toggleCartOverlay = () => {
    //     setCartOpen((cartOpen) => !cartOpen);
    // };

    // --- switch to state manangement for cart using context

    const cartCtx = useContext(CartContext);

    return (
        <CartProvider>
            {/* {cartOpen && <Cart toggleCartOverlay={toggleCartOverlay} />}
            <Header toggleCartOverlay={toggleCartOverlay} />
            <Meals /> */}

            {/* ^ old component using useState. Switched to context */}
            {console.log("APP: ", cartCtx.cartOpen)}
            {cartCtx.cartOpen && <Cart />}
            <Header />
            <Meals />
        </CartProvider>
    );
};

export default App;

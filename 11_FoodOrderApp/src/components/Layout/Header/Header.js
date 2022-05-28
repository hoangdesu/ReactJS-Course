import React, { Fragment, useContext } from 'react';

import classes from './Header.module.css';
import headerImage from '../../../assets/header1.jpeg';
import HeaderCartButton from '../HeaderCartButton';

const Header = ({ toggleCartOverlay }) => {

    return (
        // Using Context.Consumer approach, not clean :/
        // <CartContext.Consumer>
        //     {(ctx) => {
        //         return (
        //             <>
        //                 <header className={classes['header']}>
        //                     <h1>Brian Sushi</h1>
        //                     <HeaderCartButton
        //                         toggleCartOverlay={toggleCartOverlay}
        //                     />
        //                 </header>
        //                 <div className={classes['main-image']}>
        //                     <img src={headerImage} alt="Header" />
        //                 </div>
        //             </>
        //         );
        //     }}
        // </CartContext.Consumer>

        // using useContext object, much better 👍
        <>
            <header className={classes['header']}>
                <h1>Brian Sushi</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="Header" />
            </div>
        </>
    );
};

export default Header;

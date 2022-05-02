import React from 'react';

import classes from './Header.module.css';
import headerImage from '../../../assets/header1.jpeg';

const Header = () => {
    return (
        <>
            <header className={classes['header']}>
                <h1>Brian Sushi</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="Header" />
            </div>
        </>
    );
};

export default Header;

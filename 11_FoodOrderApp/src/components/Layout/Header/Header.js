import React from 'react';

import classes from './Header.module.css';
import headerImage from '../../../assets/header1.jpeg';
import HeaderCartButton from '../HeaderCartButton';

const Header = ({ toggleCartOverlay }) => {
    return (
        <>
            <header className={classes['header']}>
                <h1>Brian Sushi</h1>
                <HeaderCartButton toggleCartOverlay={toggleCartOverlay} />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="Header" />
            </div>
        </>
    );
};

export default Header;

import React from 'react';

import './Footer.css';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    
    return (
        <p>
            <a href='https://github.com/hoangdesu/' target='_blank' rel='noreferrer'>Hoang Nguyen&#169;{year}</a>
        </p>
    );
};

export default Footer

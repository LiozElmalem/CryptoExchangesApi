import React from 'react';
import './Styles/Header.css';

const Header = () => {

    const classes =
        ['header',
            'Header']
            .join(' ')

    return (
        <div
            className={classes} >
            <h2>Crypto Currencies Exchanges</h2>
        </div>
    );
}

export default Header;
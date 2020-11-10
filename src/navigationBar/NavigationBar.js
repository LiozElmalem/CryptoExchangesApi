import React from 'react';
import './NavigationBar.css';
import NavigationLink from './NavigationLink';

const NavigationBar = () => {
    return (
        <div className="topnav">
            <NavigationLink classes='navlink' to="/" title="Home" />
        </div>
    );
};

export default NavigationBar;



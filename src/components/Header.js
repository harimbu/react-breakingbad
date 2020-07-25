import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='logo' className='logo' />
        </header>
    );
};

export default Header;

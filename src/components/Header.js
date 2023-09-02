import React from 'react';
import Navigation from './Navigation';
import '../styles/components/header.scss'

const Header = () => {
    return (
        <div className='navprincipale'>
            <Navigation />
            <div className='FlagFr'>
                <img src="../LogoFlagFr.svg" alt="Drapeau France" />
            </div>
        </div>
    );
};

export default Header;
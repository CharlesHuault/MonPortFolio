import React from 'react';
import Navigation from './Navigation';
import '../styles/components/header.scss'
import logoFR from '../assets/logos/LogoFlagFr.svg'

const Header = () => {
    return (
        <div className='navprincipale'>
            <Navigation />
            <div className='FlagFr'>
                <img src={logoFR} alt="Drapeau France" />
            </div>
        </div>
    );
};

export default Header;
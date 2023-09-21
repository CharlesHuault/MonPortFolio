import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import '../styles/components/header.scss';
import logoFR from '../assets/logos/LogoFlagFr.svg';
import logoUK from '../assets/logos/LogoFlagUk.svg';


// Composant Header contenant le composant de navigation principale et la logique de changement de langue de la page 
const Header = () => {
    // Appel de i18n pour la traduction des textes du composant
    const { i18n } = useTranslation();

    // Définition des constantes de changement de langue et du menu déroulant affichant les drapeaux
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentLanguage = i18n.language;

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='navprincipale'>
            <Navigation />
            <div className='FlagFr' onClick={toggleDropdown}>
                <img src={currentLanguage === 'fr' ? logoFR : logoUK} alt="Drapeau France" />
                {isDropdownOpen && (
                    <div className='language-dropdown'>
                        {currentLanguage !== 'fr' && (
                            <img
                                src={logoFR}
                                alt="Drapeau France"
                                onClick={() => changeLanguage('fr')}
                            />
                        )}
                        {currentLanguage !== 'en' && (
                            <img
                                src={logoUK}
                                alt="Drapeau Royaume-Uni"
                                onClick={() => changeLanguage('en')}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import '../styles/components/header.scss';
import logoFR from '../assets/logos/LogoFlagFr.svg';
import logoUK from '../assets/logos/LogoFlagUk.svg';
import {Language} from '../Language.ts'

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentLanguage = i18n.language;
//  const changeLanguage = (lng) => {i18n.changeLanguage(lng);};

//   return (
//     <div className="App">
//       <div className="App-header">
//         <button type="button" onClick={() => changeLanguage('fr')}>
//           fr
//         </button>
//         <button type="button" onClick={() => changeLanguage('en')}>
//           en
//         </button>
//       </div>

//       <div>{t('accueil.title')}</div>
//     </div>
//   );
// }

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
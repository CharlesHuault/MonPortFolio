import React from 'react';
import '../styles/components/footer.scss'
import { useTranslation } from 'react-i18next';
import logoMail from '../assets/logos/LogoMAILfooter.svg'
import logoTel from '../assets/logos/LogoTEL.svg'

const Footer = () => {
    // Appel de i18n pour la traduction des textes du composant
    const { t } = useTranslation();
    
    return (
        <div className='footer'>
            <div className='logo-footer'>
                <a href="mailto:chuault@gmail.com"><img src={logoMail} alt="Logo Enveloppe Mail" /></a>
                <a href="tel:+33661426129"><img src={logoTel} alt="Logo Téléphone" /></a>
            </div>

            {t('footer.text')}
        </div>
    );
};

export default Footer;
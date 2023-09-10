import React from 'react';
import '../styles/components/footer.scss'
import logoMail from '../assets/logos/LogoMAILfooter.svg'
import logoTel from '../assets/logos/LogoTEL.svg'

const Footer = () => {
    return (
        <div className='footer-background'>
            <div className='logo-footer'>
                <a href="mailto:chuault@gmail.com"><img src={logoMail} alt="Logo Enveloppe Mail" /></a>
                <a href="tel:+33661426129"><img src={logoTel} alt="Logo Téléphone" /></a>
            </div>
            <div>
                Réalisé en ReactJS par Charles Huault
            </div>
        </div>
    );
};

export default Footer;